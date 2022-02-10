import React from "react";
import MContactBlack from "../../molecule/MContactBlack/MContactBlack";

// icons 
import Scale from '../../../assets/icons/default/scale.png'

import './OTopBar.css'

const OTopBar =() =>{

    const infoContact=[
        {text:'+375 29 100 20 30',icon:Scale},
        {text:'Belarus, Gomel, Lange 17',icon:Scale},
        {text:'All week 24/7',icon:Scale}       
    ]



    return(
        <div className='OTopBar'>
            {infoContact.map((el,id)=>{return(<MContactBlack
             key={id} 
             propText={el.text} 
             propSrc={el.icon} />)})}

             
        </div>
    )
} 

export default OTopBar;