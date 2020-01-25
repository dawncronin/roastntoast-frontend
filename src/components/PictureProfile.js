import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


function UserPicture({attribute, id}) {
    return (
        <NavLink to = {`/pictures/${id}`} exact>
        <div className="profileCard">
            <img src = {attribute.img_url}  height="200"></img>
            <p>Roast Bio: {attribute.roast_bio}</p>
            <p>Toast Bio: {attribute.toast_bio}</p>
            </div>
            </NavLink>
    )
}

export default UserPicture