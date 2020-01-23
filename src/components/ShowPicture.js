import React, {Component} from 'react';
import Comment from "./Comment"
import AddComment from "./AddComment"


function ShowPicture({match, pictures, roast, currentUser, handleNewComment}) {
       let display = <h3>Loading...</h3>

    if (pictures[0]) {
   let pictureId = match.params.pictureId

   let thisPic = pictures.find(pic => pic.id === pictureId)

   let comments = thisPic.attributes.comments.filter(com => com.roast === roast)

   comments = comments.map(com => < Comment comment={com} key={com.id}/>)



    display =  <div><h3>{thisPic.id}</h3>
     <img src={thisPic.attributes.img_url} alt={"picture"}/>
     < AddComment roast={roast} currentUser={currentUser} pictureId={pictureId} handleNewComment={handleNewComment}/>
     {comments}
     </div>

    }
    else {
        display = <h3>Loading...</h3>
    }
    return ( 
        <div>
            {display}
        </div>


    )
}

export default ShowPicture