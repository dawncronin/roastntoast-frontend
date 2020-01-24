import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


function UserPicture({attribute, id}) {
    return (
        <div className="roastCard">
            <img src = {attribute.img_url} width="200" height="200"></img>
            <p>By: {attribute.username}</p>
            <p>Roast Bio: {attribute.roast_bio}</p>
            <p>Toast Bio: {attribute.toast_bio}</p>
           
            <NavLink to = {`/pictures/${id}`} exact>Go to Picture</NavLink>
        </div>
    )
}

export default UserPicture