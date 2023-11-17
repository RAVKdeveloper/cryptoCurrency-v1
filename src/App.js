
import { createContext } from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/main/Main';
import './styles/common.css';
import PremainMess from './uicomponents/premainmess/Premainmess';
import Dashbord from './components/pages/dashbord/Dashbord';
import Error from './components/pages/Error404/Error';
import ScrollToTop from './utils/ScrollToTop/ScrollToTop';
import { URL } from './components/pages/dashbord/AccountInfo/AccountInfo';
import PreLoader from './uicomponents/PreLoader/PreLoader';
import Registration from './components/pages/Auth/Registration/Registration';

export const UserContext = createContext(true);
export const AccountContext = createContext('');
export const NickNameAndID = createContext('') 

function App() {

  const [btnRow, setBtnROw] = useState(true);
  const [userId, setUserId] = useState(localStorage.getItem('auth'));
  const [ userNick, setUserNick ] = useState('')
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if(userId !== '' && userId !== undefined && userId !== null) {
     fetch(`${URL}/${userId}`, {
      method: 'GET'
     })
     .then(res => {
      return res.json()
     })
     .then(arr => {
       if(arr.active === "0") {
        setBtnROw(true)
       } else{
        setBtnROw(false)
        setUserId(arr.id)
        setUserNick(arr.name)
       }
     })
     .catch(err => {
      console.log(err)
     })
     .finally(() => {
        setLoader(false)
     })
    } else{
      setLoader(false)
    }
  }, [btnRow, userId])

  return (
    <div className="App">
      <Router>
      <ScrollToTop />
      <UserContext.Provider value={{ btnRow, setBtnROw }}>
        <AccountContext.Provider value={{ userId, setUserId }}>
          <NickNameAndID.Provider value={{ userNick, setUserNick }}>
        <PremainMess/>
        <Routes>
        <Route path='/' element={<MainPage/>}/>
        {
          btnRow ? 
          <Route path='/user/registration' element={<Registration/>}/>
          :
          <Route path='/dashbord' element={<Dashbord/>}/>
        }
        <Route path='*' element={<Error/>}/>
        </Routes>
        </NickNameAndID.Provider>
        </AccountContext.Provider>
        {
          loader ? 
          <PreLoader/>
          :
           null
        }
      </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
