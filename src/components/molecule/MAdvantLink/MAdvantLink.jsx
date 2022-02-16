import React from 'react';

// components 
import AIcon from '../../atoms/AIcon/AIcon';
import AText from '../../atoms/AText/AText';


import './MAdvantLink.css'

const MAdvantLink = ({propText,propSrc}) => {

    return (
        <div className='wrapper-MAdvantLink'>
        <AIcon propSrc={propSrc}/>
        <AText  propText={propText}/>
        </div>
    )
}

export default MAdvantLink;
