
import { createContext } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainPage from './components/pages/main/Main';
import './styles/common.css';
import PremainMess from './uicomponents/premainmess/Premainmess';
import Test from './components/testapi/Test';
import Dashbord from './components/pages/dashbord/Dashbord';
import Error from './components/pages/Error404/Error';
import ScrollToTop from './utils/ScrollToTop/ScrollToTop';

export const UserContext = createContext(true);

function App() {

  const [btnRow, setBtnROw] = useState(true);

  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
      <UserContext.Provider value={{ btnRow, setBtnROw }}>
        <Header/>
        <PremainMess/>
        <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/dashbord' element={<Dashbord/>}/>
        <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/>
      </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
