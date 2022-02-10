import React from 'react';
import AIcon from '../../atoms/AIcon/AIcon';
import logo from '../../../assets/logo_CleverShop.svg'

// icon
import Search from '../../../assets/icons/main/search.png'
import Global from '../../../assets/icons/main/globe.png'
import User from '../../../assets/icons/main/user.png'
import ShoppingBag from '../../../assets/icons/main/shoppingBag.png'



import './ONavigationBar.css'

const ONavigationBar = () => {

    const NavList = [
        { text: 'About Us' },
        { text: 'Women' },
        { text: 'Men' },
        { text: 'Beauty' },
        { text: 'Accessories' },
        { text: 'Blog' },
        { text: 'Contact' }
    ]

    const NavIcon=[
        Search,Global,User,ShoppingBag
    ]

    return (
        <div className='wrapper-NavLink'>
            <AIcon propSrc={logo} />
            <ul className='NavLinks'>
                <li><a href='#'>About Us</a></li>
                <li><a  href='#'>Women</a></li>
                <li><a  href='#'>Men</a></li>
                <li><a  href='#'>Beauty</a></li>
                <li><a  href='#'>Accessories</a></li>
                <li><a  href='#'>Blog</a></li>
                <li><a  href='#'>Contact</a></li>
            </ul>
            <div className='NavIcon'>
                {NavIcon.map(el=><AIcon  propSrc={el} />)}
            </div>
        </div>
    )
}



export default ONavigationBar;