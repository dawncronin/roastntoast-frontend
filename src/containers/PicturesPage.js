import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
  import ShowPicture from "../components/ShowPicture"


function PicturesPage({match, pictures, roast, flipRoast, currentUser, handleNewComment}) {
    let flipState
    let currentState



    if (roast) {
        flipState = "Toast"
        currentState = "Roasting"
    }
    else {
        flipState = "Roast"
        currentState = "Toasting"
    }



    return   (
        <div>
            <h1> Currently {currentState} </h1>
            <button onClick={flipRoast}>Flip to {flipState}</button>
          <Route path={`${match.url}/:pictureId`} render={routerProps => <ShowPicture {...routerProps} handleNewComment={handleNewComment} roast={roast} pictures={pictures} currentUser={currentUser}/> }/>
        </div>
      )
}

export default PicturesPage