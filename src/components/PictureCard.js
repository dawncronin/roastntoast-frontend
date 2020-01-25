import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


function PictureCard({attribute, id}) {
    let likes = attribute.picture_likes.length
    let dislikes = attribute.picture_dislikes.length
    return (
        <NavLink to = {`/pictures/${id}`} exact>
        <div className="pictureCard">
            <img className="pictureCardPicture" src = {attribute.img_url} height="200"></img>
             <br/> <span className="cardSpan"> Posted By: {attribute.user.username}
            <p>Roast Bio: {attribute.roast_bio}</p>
            <p>Toast Bio: {attribute.toast_bio}</p>
            Likes: {likes} Disikes:{dislikes}
            </span>  
        </div>
        </NavLink>
    )
}

export default PictureCard      