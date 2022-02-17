import React from 'react';


// atom
import AImage from '../../atoms/AImage/AImage'
import AText from '../../atoms/AText/AText'

import image1 from '../../../assets/Women/Rectangle3.jpg'
import image2 from '../../../assets/Men/RectangleMen1.jpg'
import image3 from '../../../assets/Accessor/MainAccessor.jpg'

import './OMainBlockImg.css'
import MImageBanner from '../../molecule/MImageBanner/MImageBanner';

const OMainBlockImg = () => {

    return (
        <div className='wrapper-blockImg'>
            <div className='twoBlockImg'>
                <MImageBanner propText={'women'} propImg={image1} />
                <MImageBanner propText={'men'} propImg={image2} />
            </div>

            <div className='blockBottomImg3'>
                <AImage propSrc={image3} />
                <div className='banner3'>
                    <AText propText={'Accessories'} />
                </div>

            </div>
        </div>

    )
}

export default OMainBlockImg;


                {/* <div className='blockImg2'>
                    <AImage propSrc={image2} />
                    <div className='banner2'>
                        <AText propText={'Men'} />
                    </div>
                </div> */}