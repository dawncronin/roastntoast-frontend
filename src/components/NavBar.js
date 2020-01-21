import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../logo.png'


function NavBar() {

    return (
        <div className="navBar">
            <img className="logo" src={Logo} alt='website logo' />
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/addpicture">Add Picture</NavLink>

        </div>
    )
}

export default NavBar