import React from 'react';
import AImage from '../../atoms/AImage/AImage';
import AText from '../../atoms/AText/AText';

import './MCardProduct.css'

const OCardProduct=({img, description, priceChild, rateChild, })=>{
    return(
        <div>
            <AImage propSrc={img} />
            <AText propText={description} />
            <div>
                <div>
                <AText propText={priceChild}/>
                <AText propText={priceChild} />
                </div>
                <div>
                    rate/img*5
                </div>
            </div>
        </div>
    )
}


export default OCardProduct;