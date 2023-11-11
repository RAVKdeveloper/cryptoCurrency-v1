
import { createContext } from 'react';
import { useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainPage from './components/pages/main/Main';
import './styles/common.css';
import PremainMess from './uicomponents/premainmess/Premainmess';

export const UserContext = createContext(true);

function App() {

  const [btnRow, setBtnROw] = useState(true);

  return (
    <div className="App">
      <UserContext.Provider value={{ btnRow, setBtnROw }}>
        <Header/>
        <PremainMess/>
        <MainPage/>
        <Footer/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
