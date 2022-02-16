import './App.css';

// atoms 
import AButton from './components/atoms/AButton/AButton';
import AText from './components/atoms/AText/AText';
import AIcon from './components/atoms/AIcon/AIcon';


// molecule 
import MInfoText from './components/molecule/MInfoText/MInfoText';
import MCardProduct from './components/molecule/MCardProduct/MCardProduct'


// organism 
import OWomen from './components/organism/OWomen/OWomen';
import OAddInfo from './components/organism/OAddInfo/OAddInfo';
import OCardList from './components/organism/OCardList/OCardList';
import OClassLinks from './components/organism/OClassLinks/OClassLinks'


// template
import THeader from './components/template/THeader/THeader';
import TAbout from './components/template/TAbout/TAbout'
import TFooter from './components/template/TFooter/TFooter';




function App() {


  return (
    <div className="App">

      <THeader />
      <TAbout />

      <OClassLinks />
      <OWomen />
      <OCardList />
      
      <TFooter />



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