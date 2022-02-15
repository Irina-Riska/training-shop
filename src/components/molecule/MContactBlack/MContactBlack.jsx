import React from 'react';

// components 
import AIcon from '../../atoms/AIcon/AIcon';
import AText from '../../atoms/AText/AText';


import './MContactBlack.css'

const MContactBlack = ({propText,propSrc}) => {

    return (
        <div className='wrapper-MContactBlack'>
        <AIcon propSrc={propSrc}/>
        <AText  propText={propText}/>
        </div>
    )
}

export default MContactBlack;

