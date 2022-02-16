import './App.css';

// atoms 
import AButton from './components/atoms/AButton/AButton';
import AText from './components/atoms/AText/AText';
import AIcon from './components/atoms/AIcon/AIcon';


// molecule 
import MContactBlack from './components/molecule/MContactBlack/MContactBlack';
import MInfoText from './components/molecule/MInfoText/MInfoText';
import MCardProduct from './components/molecule/MCardProduct/MCardProduct'

// organism 
import OTopBar from './components/organism/OTopBar/OTopBar';
import ONavigationBar from './components/organism/ONavigationBar/ONavigationBar';
import OSlider from './components/organism/OSlider/OSlider';
import OWomen from './components/organism/OWomen/OWomen';
import OAddInfo from './components/organism/OAddInfo/OAddInfo';
import OCardList from './components/organism/OCardList/OCardList';
import OMainBlockImg from './components/organism/OMainBlockImg/OMainBlockImg';
import OClassLinks from './components/organism/OClassLinks/OClassLinks'

// template
import THeader from './components/template/THeader/THeader';
import TAbout from './components/template/TAbout/TAbout'




function App() {


  return (
    <div className="App">

      <OTopBar />
      <ONavigationBar />
      <TAbout />

      <OClassLinks />
      <OWomen />
      <OCardList />
      <OAddInfo />



    </div>
  );
}

export default App;


{/* <AButton 
      type={'submit'} 
      propText={'this is funny button'}
      />


      <AText
       propText={'this text'}
       sizeFont={'60px'}
       color={'orange'}
       /> */}