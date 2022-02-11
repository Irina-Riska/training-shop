import react from 'react';
import AImage from '../../atoms/AImage/AImage';
import AText from '../../atoms/AText/AText';

// atom
import image from '../../../assets/women/Rectangle1.jpg';
import './OSlider.css'



const OSlider =()=>{

   
    return(
        <div className='wrapper-main'>

            <div className='main-slider'>
            {/* <AImage propSrc={image}/> */}
            </div>

            <div className='main-banner'>
                <AText propText={'Banner'}/>
                <AText propText={'Your title text'}/>

            </div>
            
        </div>

    )
}

export default OSlider;