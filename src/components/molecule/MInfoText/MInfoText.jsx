import React from "react";

import AText from "../../atoms/AText/AText";

import './MInfoText.css'

const MInfoText=({title,items})=>{

    return (
        <div className="wrapper-infoText">
            <AText propText={title} />
            <div>
                {items && items.length && items.map((el,id)=><AText key={id} propText={el}/>)}
            </div>
        </div>
    )
}

export default MInfoText;