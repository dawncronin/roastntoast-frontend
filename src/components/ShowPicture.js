import React, {Component} from 'react';
import Comment from "./Comment"
import AddComment from "./AddComment"
import api from '../services/Api';

class ShowPicture extends Component {
    constructor() {
        super()
        this.state = {
            currentUser: "",
            picture: {},
            comments: []
        }
    }


    grabPictureData = () => {
       return api.pictures.getPicture(this.props.match.params.pictureId).then(picture => {
            this.setState({picture: picture})
            console.log(picture)
            return picture
        })  
    }

    filterComments = () => {
        if (this.state.picture.included) {
            let comments = this.state.picture.included.filter(com => com.attributes.roast === this.props.roast)
            comments = comments.map(com => < Comment 
                handleCommentDelete={this.handleCommentDelete} 
                comment={com} key={com.id} 
                currentUser={this.state.currentUser} 
                handleCommentLike={this.handleCommentLike}
                handleCommentDislike={this.handleCommentDislike}
                roast={this.props.roast}/>)
            return comments
        }
    }

    handleCommentDelete = (id) => {
        api.comments.deleteComment(id)
        .then(() => this.grabPictureData())
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        if (token) {
          api.auth.getCurrentUser().then(user => {
            this.setState({currentUser: user });
          }).then(() => this.grabPictureData())}
        }

    handleNewComment = ({picture_id, roast, user_id, text}) => {
        return api.comments.postComment({picture_id: picture_id, roast: roast, user_id: user_id, text: text})
        .then(() => this.grabPictureData())
    }
    
    handlePictureLike = () => {
        let like = this.state.picture.data.attributes.picture_likes.find(like => like.user_id === this.props.currentUser.id)
        if (!like) {
            api.pictures.postPictureLike(this.props.currentUser.id, this.state.picture.data.id)
            .then (() => {
                this.grabPictureData()
            })
            
        }
        else {
            api.pictures.deletePictureLike(like.id).then(() => this.grabPictureData())
        }
    }

    handlePictureDislike = () => {
        let dislike = this.state.picture.data.attributes.picture_dislikes.find(like => like.user_id === this.props.currentUser.id)
        if (!dislike) {
            api.pictures.postPictureDislike(this.props.currentUser.id, this.state.picture.data.id)
            .then (() => {
                this.grabPictureData()
            })
            
        }
        else {
            api.pictures.deletePictureDislike(dislike.id).then(() => this.grabPictureData())
        }
    }

    handleCommentLike = (comment) => {
        let like = comment.attributes.likes.find(like => like.user_id === this.props.currentUser.id)
        console.log(like)
        if (!like) {
            api.comments.postLike(this.props.currentUser.id, comment.id)
            .then (() => {
                this.grabPictureData()
            })
            
        }
        else {
            api.comments.deleteLike(like.id).then(() => this.grabPictureData())
        }
    }

    handleCommentDislike = (comment) => {
        let like = comment.attributes.dislikes.find(like => like.user_id === this.props.currentUser.id)
        if (!like) {
            api.comments.postDislike(this.props.currentUser.id, comment.id)
            .then (() => {
                this.grabPictureData()
            })   
        }
        else {
            api.comments.deleteDislike(like.id).then(() => this.grabPictureData())
        }
    }

    render() {   
       const comments = this.filterComments()
        return ( 
            this.state.picture.included ? (
            <div>
                <h2> {this.props.roast ? this.state.picture.data.attributes.roast_bio : this.state.picture.data.attributes.toast_bio} </h2>
                 {this.state.picture.data? this.state.picture.data.attributes.picture_likes.length : 0}
                <button className={`${this.props.roast}-upvote`} onClick={this.handlePictureLike}> </button>
                {this.state.picture.data? this.state.picture.data.attributes.picture_dislikes.length : 0}
                <button className={`${this.props.roast}-downvote`} onClick={this.handlePictureDislike}>  </button> <br/>
                <img className="picturePageImg"src={this.state.picture.data.attributes.img_url} alt={"picture"} width="600"/>
                < AddComment roast={this.props.roast} currentUser={this.state.currentUser} pictureId={this.state.picture.data.id} handleNewComment={this.handleNewComment}/>
                {comments}
            </div>
            ) :
            <div>loading</div>
        )
    }
}

export default ShowPicture