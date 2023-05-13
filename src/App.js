import logo from './logo.svg';
import './App.css';
import FirstNavBar from './components/FirstNavBar';
import SecondNavBar from './components/SecondNavBar';
import SlideShowCont from './components/SlideShowCont';
import FirstProductRow from './components/FirstProductRow';
import SecondProductRow from './components/SecondProductRow';
import ThirdProductRow from './components/ThirdProductRow';

function App() {
  return (
    <div className='parent'>
      <FirstNavBar className="first-nav"></FirstNavBar>
      <SecondNavBar className="second-nav"></SecondNavBar>
      <SlideShowCont className="slide-show-cont"></SlideShowCont>
      <FirstProductRow className="first-row-products"></FirstProductRow>
      <br></br>
      <SecondProductRow></SecondProductRow>
      <br></br>
      <ThirdProductRow></ThirdProductRow>
    </div>
    

  );
}

export default App;
