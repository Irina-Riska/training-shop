import React from "react";

// organism
import OSlider from '../../organism/OSlider/OSlider';
import OMainBlockImg from "../../organism/OMainBlockImg/OMainBlockImg";
import OAdvantBlock from "../../organism/OAdvantBlock/OAdvantBlock";

import './TAbout.css';

const TAbout = () => {

    return (
        <div className="wrapper-mainPage">
            <div className="block">
            <OSlider />
            <OMainBlockImg />
            </div>
            <OAdvantBlock />
        </div>
    )
}

export default TAbout;
