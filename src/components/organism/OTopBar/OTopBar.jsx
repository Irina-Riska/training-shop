import React from "react";
import MContactBlack from "../../molecule/MContactBlack/MContactBlack";

// icons 
import Phone from '../../../assets/icons/default/phone-white.svg'
import Location from '../../../assets/icons/default/location-white.svg'
import Clock from '../../../assets/icons/default/clock-white.svg'
import Facebook from '../../../assets/icons/social/facebook-white.svg'
import Twitter from '../../../assets/icons/social/twitter-white.svg'
import Insta from '../../../assets/icons/social/instagram-white.svg'
import Pinterest from '../../../assets/icons/social/pinterest-white.svg'

import './OTopBar.css'
import AIcon from "../../atoms/AIcon/AIcon";

const OTopBar = () => {

    const infoContact = [
        { text: '+375 29 100 20 30', icon: Phone },
        { text: 'Belarus, Gomel, Lange 17', icon: Location },
        { text: 'All week 24/7', icon: Clock },
    ]

    const infoSocial = [
        Facebook, Twitter, Insta, Pinterest
    ]



    return (
        <div className='OTopBar'>
            {infoContact.map((el, id) => {
                return (<MContactBlack
                    key={id}
                    propText={el.text}
                    propSrc={el.icon} />)
            })}


            <div className='infoSocial'>
                {infoSocial.map(el=><AIcon  propSrc={el} />)}
            </div>

        </div>

    )
}

export default OTopBar;