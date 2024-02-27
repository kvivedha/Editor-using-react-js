import React, { Component } from 'react';
import logo from '../image/social-media-3.png'
import '../Css/modal.css'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
            {/* <a className="navbar-brand" href="#"> */}
                <img src={logo} className='navbar_img' alt="" />
            {/* </a> */}
            </nav>
        </div>
    );
}

export default Navbar;