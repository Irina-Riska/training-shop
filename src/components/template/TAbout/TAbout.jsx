import React from "react";

// organism
import OSlider from '../../organism/OSlider/OSlider';
import OMainBlockImg from "../../organism/OMainBlockImg/OMainBlockImg";

import './TAbout.css';

const TAbout = () => {

    return (
        <div className="wrapper-mainPage">
            <OSlider />
            <OMainBlockImg />
        </div>
    )
}

export default TAbout;
