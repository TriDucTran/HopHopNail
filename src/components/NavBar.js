import React from 'react';
import { NavLink } from 'react-router-dom';
import '../static/icons/themify-icons/themify-icons.css';

const NavBar = () => {
    return (
        <div id='header'>
            <ul className='navbar'>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>Products</a>
                </li>
                <li>
                    <a href='#'>Contact Us</a>
                </li>
            </ul>
            <div className='search-btn'>
                <i className='search-icon ti-search'></i>
            </div>
        </div>

    )
}

export default NavBar;