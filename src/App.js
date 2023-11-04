
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
    </div>
  );
}

export default App;
