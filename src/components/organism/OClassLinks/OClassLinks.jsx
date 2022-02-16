import React from 'react';

// import logo from '../../../assets/logo_CleverShop.svg'



import './OClassLinks.css'

const OClassLinks = () => {

    const ClassNavList = [
        { text: 'NEW ARRIVALS' },
        { text: 'SPECIALS' },
        { text: 'BESTSELLERS' },
        { text: 'MOST VIEWED' },
        { text: 'AFEATURED PRODUCT' },

    ]


    return (
        <div className='wrapper-ClassNavLink'>
            {/* <AIcon propSrc={logo} /> */}
            <ul className='classNavLinks'>
                <li><a href='#'>NEW ARRIVALS</a></li>
                <li><a href='#'>SPECIALS</a></li>
                <li><a href='#'>BESTSELLERS</a></li>
                <li><a href='#'>MOST VIEWED</a></li>
                <li><a href='#'>AFEATURED PRODUCT</a></li>
            </ul>
            {/* <div className='NavIcon'>
                {NavIcon.map((el, id) => <AIcon key={id} propSrc={el} />)}
            </div> */}
        </div>
    )
}



export default OClassLinks;