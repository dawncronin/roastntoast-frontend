import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../logo.png'


function NavBar(props) {
    const loggedIn = !!props.currentUser.id;


    return (
        <div className="navBar">
            <ul>
            <li> <img className="logo" src={Logo} alt='website logo' /> </li>
            <li className="nav"><NavLink to="/">Home</NavLink></li>
            {/* {loggedIn? ( */ }
            {false ? (
                <div>
                <li className="nav"><NavLink to="/gallery">Gallery</NavLink></li>
                <li className="nav"><NavLink to="/profile">Profile</NavLink></li>
                <li className="nav"><NavLink to="/addpicture">Add Picture</NavLink></li>
                <li className="nav"><NavLink to="/" onClick={props.handleLogout}>Logout</NavLink> </li> 
                </div>
                
            ) : ( 
                <div>
            <li className="nav"><NavLink to="/login">Login</NavLink></li> 
            <li className="nav"><NavLink to="/signup">Signup</NavLink></li> 
            </div>
            )}
            </ul>
        </div>
    )
}

export default NavBar