import React from 'react'
import './style.css';
import logo from '../img/logo.PNG';
const navbar = () => {
    return (

        <nav className="navbar">
            <div className="nav-wrapper">
            <img src={logo} className="brand-img" alt=""/>
            <input type="text" className="search-box" placeholder="search"></input>
            
            </div>
        </nav>

    )
}

export default navbar;
