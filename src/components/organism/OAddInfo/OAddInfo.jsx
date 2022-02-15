import React from "react";

// molecula
import MInfoText from "../../molecule/MInfoText/MInfoText";

import './OAddInfo.css'

const OAddInfo=()=>{

    const dataLink=[
            {
                title:'Categories',
                items:['Men', 'Women','Accessories','Beauty'],
            },

        {    
            title:'Infomation',
            items:['About Us', 'Contact Us','Blog','FAQs'],
        },
        {    
            title:'Useful links',
            items:['Terms & Conditions', 'Returns & Exchanges','Shipping & Delivery','Privacy Policy'],
        },
        {    
            title:'CONTACT US',
            items:['Belarus, Gomel, Lange 17', 'W+375 29 100 20 30','All week 24/7','info@clevertec.ru'],
        },
            
         ]
        

    return(
<div className='wrapper-addInfo'>

{dataLink.map((el,id)=><MInfoText key={id} title={el.title} items={el.items}/>)}
</div>
    )
}

export default OAddInfo;