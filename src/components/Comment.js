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
                <span className="commentSpan">
                {likes} <button className={`${this.props.roast}-upvote`} onClick={this.handleLike}></button>
                {dislikes} h<button className={`${this.props.roast}-downvote`} onClick={this.handleDislike}></button>
                {this.props.comment.attributes.text} <br/>
                {/* posted by: {comUser} */}
                { comUserId === userId ? <button className="deleteComment"onClick={this.handleDelete}>Delete Comment</button> : ""}
                </span>
            </div> 
        
        )
    }
}

export default Comment