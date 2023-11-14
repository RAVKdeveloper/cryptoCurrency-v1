
import { createContext } from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainPage from './components/pages/main/Main';
import './styles/common.css';
import PremainMess from './uicomponents/premainmess/Premainmess';
// import Test from './components/testapi/Test';
import Dashbord from './components/pages/dashbord/Dashbord';
import Error from './components/pages/Error404/Error';
import ScrollToTop from './utils/ScrollToTop/ScrollToTop';
import { URL } from './components/pages/dashbord/AccountInfo/AccountInfo';
import PreLoader from './uicomponents/PreLoader/PreLoader';

export const UserContext = createContext(true);
export const AccountContext = createContext('');

function App() {

  const [btnRow, setBtnROw] = useState(true);
  const [userId, setUserId] = useState('');
  const [loader, setLoader] = useState(true);
 
  useEffect(() => {
     fetch(URL, {
      method: 'GET'
     })
     .then(res => {
      return res.json()
     })
     .then(arr => {
       if(arr.active === "0") {
        setBtnROw(true)
        console.log(arr.active)
       } else{
        setBtnROw(false)
       }
     })
     .catch(err => {
      console.log('error')
     })
     .finally(() => {
        setLoader(false)
     })
  }, [btnRow])

  return (
    <div className="App">
      <Router>
      <ScrollToTop />
      <UserContext.Provider value={{ btnRow, setBtnROw }}>
        <AccountContext.Provider value={{ userId, setUserId }}>
        <Header/>
        <PremainMess/>
        <Routes>
        <Route path='/' element={<MainPage/>}/>
        {
          btnRow ? null
          :
          <Route path='/dashbord' element={<Dashbord/>}/>
        }
        <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/>
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
