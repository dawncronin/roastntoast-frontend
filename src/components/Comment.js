import React, {Component} from 'react';
import api from '../services/Api';


class Comment extends Component{
    constructor() {
        super()
        this.state = {
            comment: []
        }
    }
    handleDelete = (e) => {
        this.props.handleCommentDelete(this.props.comment.id)
    }

    handleLike = (e) => {
        this.props.handleCommentLike(this.props.comment)

    }

    handleDislike = (e) => {
        this.props.handleCommentDislike(this.props.comment)
    }

    render() {
        let comUser = this.props.comment.attributes ? this.props.comment.attributes.user.username : ""
        let comUserId = this.props.comment.attributes ? this.props.comment.attributes.user.id : ""
        let likes = this.props.comment.attributes ? this.props.comment.attributes.likes.length : ""
        let dislikes = this.props.comment.attributes ? this.props.comment.attributes.dislikes.length : ""
        let userId = this.props.currentUser.id? this.props.currentUser.id : "no user found"
        
        return (
            <div className="comment">
                <h3>{comUser}:{this.props.comment.attributes.text}</h3>
                <h4> Like: {likes}</h4>
                <button onClick={this.handleLike}>Like</button>
                <h4> Dislike: {dislikes}</h4>
                <button onClick={this.handleDislike}>Disike</button>
                { comUserId === userId ? <button onClick={this.handleDelete}>Delete Comment</button> : ""}
            </div> 
        
        )
    }
}

export default Comment