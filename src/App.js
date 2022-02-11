import './App.css';

// atoms 
import AButton from './components/atoms/AButton/AButton';
import AText from './components/atoms/AText/AText';
import AIcon from './components/atoms/AIcon/AIcon';


// molecule 
import MContactBlack from './components/molecule/MContactBlack/MContactBlack';

// organism 
import OTopBar from './components/organism/OTopBar/OTopBar';
import ONavigationBar from './components/organism/ONavigationBar/ONavigationBar';
import OSlider from './components/organism/OSlider/OSlider';

// template
import THeader from './components/template/THeader/THeader';




function App() {


  return (
    <div className="App">
      heloo
      <br/>

    <OTopBar />
    <ONavigationBar/>
    <OSlider />

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