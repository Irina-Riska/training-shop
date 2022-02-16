import React from 'react';
import MAdvantLink from '../../molecule/MAdvantLink/MAdvantLink';

// icons
import Truck from '../../../assets/Advant/truck.jpg';
import Return from '../../../assets/Advant/return.jpg';
import Support from '../../../assets/Advant/support.jpg';





import './OAdvantBlock.css';


const OAdvantBlock = () => {

    const advantConditions = [
        { text: 'FREE SHIPPING', icon: Truck },
        { text: '30 DAYS RETURN', icon: Return },
        { text: 'SUPPORT 24/7', icon: Support },
    ]






    
    return (
        <div className='wrapper-AdvantBlock'>
            <div className='oAdvantBlock'>
                {advantConditions.map((el, id) => {
                    return (<MAdvantLink
                        key={id}
                        propText={el.text}
                        propSrc={el.icon} />)
                })}
            </div>

        </div>


    )
}

export default OAdvantBlock;