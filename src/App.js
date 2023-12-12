
import { createContext, useCallback } from 'react';
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
import Login from './components/pages/Auth/Login/Login';
import Test from './components/testapi/Test';
import Deposit from './components/pages/UserAssets/Deposit/Deposit';
import OneClickBuy from './components/pages/UserAssets/One-ClickBuy/OneClickBuy';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchP2PAccount } from './redux/Slices/User/P2PAccount';
import OrderOneCLickAndP2p from './components/pages/UserOrders/OneCLickAndP2P/Order';
import ListOrders from './components/pages/ListOrders/ListOrders';

export const UserContext = createContext(true);
export const AccountContext = createContext('');
export const NickNameAndID = createContext('') 

function App() {

  const [btnRow, setBtnROw] = useState(true);
  const [userId, setUserId] = useState(localStorage.getItem('auth'));
  const [ userNick, setUserNick ] = useState('')
  const [loader, setLoader] = useState(true);
  const [ userBalance, setUserBalance ] = useState('')
  const [ verName, setVerName ] = useState('')

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
        setUserBalance(arr.balance)
        setVerName(arr.verificationName)
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
        <AccountContext.Provider value={{ userId, setUserId, verName }}>
          <NickNameAndID.Provider value={{ userNick, setUserNick, userBalance }}>
        <PremainMess/>
        <Routes>
        <Route path='/' element={<MainPage/>}/>
        {
          btnRow ? 
          <>
          <Route path='/user/registration' element={<Registration/>}/>
          <Route path='/user/login' element={<Login/>}/>
          </>
          :
          <>
          <Route path='/dashbord' element={<Dashbord/>}/>
          <Route path='/user/assets/deposit' element={<Deposit/>}/>
          <Route path='/user/assets/oneClickBuy' element={<OneClickBuy/>}/>
          <Route path='/user/one-click-buy/order/:id' element={<OrderOneCLickAndP2p/>} />
          <Route path='/fiat/trade/users/orderList' element={<ListOrders/>} />
          </>
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
