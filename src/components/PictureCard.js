import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


function PictureCard({attribute, id}) {
    let likes = attribute.picture_likes.length
    let dislikes = attribute.picture_dislikes.length
    return (
        <div className="roastCard">
            <img src = {attribute.img_url} width="200" height="200"></img>
            <p>By: {attribute.user.username}</p>
            <p>Roast Bio: {attribute.roast_bio}</p>
            <p>Toast Bio: {attribute.toast_bio}</p>
            <p>Likes: {likes}</p>
            <p>Disikes:{dislikes}</p>
            <NavLink to = {`/pictures/${id}`} exact>Go to Picture</NavLink>
        </div>
    )
}

export default PictureCard