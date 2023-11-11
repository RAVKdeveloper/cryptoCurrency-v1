
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainPage from './components/pages/main/Main';
import './styles/common.css';
import PremainMess from './uicomponents/premainmess/Premainmess';


function App() {
  return (
    <div className="App">
        <Header/>
        <PremainMess/>
        <MainPage/>
        <Footer/>
    </div>
  );
}

export default App;
