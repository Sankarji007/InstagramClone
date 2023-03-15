import React from 'react'
import './style.css';
import logo from '../img/logo.PNG';
const navbar = () => {
    return (

        <nav className="navbar">
            <div className="nav-wrapper">
            <img src={logo} className="brand-img" alt=""/>
            <input type="text" className="search-box" placeholder="search"/>
            
            
            </div>
            <div className='buttongrp'>
            <button className='button-18'> signup</button>
            <button className='button-18'>login</button>
            </div>
            
        </nav>

    )
}

export default navbar;
