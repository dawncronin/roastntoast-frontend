import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {

    return (
        <div className="navBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/profile">Profile</NavLink>


        </div>
    )
}

export default NavBar