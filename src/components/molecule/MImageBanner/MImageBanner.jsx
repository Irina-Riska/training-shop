import React from 'react';
import './MImageBanner.css'
import AText from '../../atoms/AText/AText';

const MImageBanner = ({propText,propImg}) => {

    return (
        <div className='wrapper-imageBanner' style={{backgroundImage:`url(${propImg})`}} >
            <div className='banner1'>
                <AText propText={propText} />
            </div>
        </div>
    )
}

export default MImageBanner;