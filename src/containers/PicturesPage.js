import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
  import ShowPicture from "../components/ShowPicture"


function PicturesPage({match, roast, flipRoast, currentUser}) {
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

    return(
        

        <div className={`picture${roast}`} >
            <span>
            <h1> Currently {currentState} </h1>
            <button className="flipButton"onClick={flipRoast}>Flip to {flipState}</button>
            </span>
          <Route path={`${match.url}/:pictureId`} render={routerProps => <ShowPicture {...routerProps} roast={roast} currentUser={currentUser}/> }/>
        </div>
      )
}

export default PicturesPage