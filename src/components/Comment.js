import React, {Component} from 'react';
import api from '../services/Api';


class Comment extends Component{
    constructor() {
        super()
        this.state = {
            comment: [],
            liked: "",
            disliked: "",
        }
    }

    componentDidMount() {
        api.comments.getComment(this.props.comment.id).then(res => {
            this.setState({comment: res.data})
            return res.data })
    }

    handleDelete = (e) => {
        this.props.handleCommentDelete(this.state.comment.id)
     
    }

    render() {
        let comUser = this.state.comment.attributes ? this.state.comment.attributes.user.username : ""
        let comUserId = this.state.comment.attributes ? this.state.comment.attributes.user.id : ""
        let likes = this.state.comment.attributes ? this.state.comment.attributes.likes.length : ""
        let dislikes = this.state.comment.attributes ? this.state.comment.attributes.likes.length : ""
        let userId = this.props.currentUser.id? this.props.currentUser.id : "no user found"
        
        return (
            <div className="comment">
                <h3>{comUser}:{this.props.comment.text}</h3>
                <h4> Like: {likes}</h4>
                <h4> Dislike: {dislikes}</h4>
                { comUserId === userId ? <button onClick={this.handleDelete}>Delete</button> : ""}
            </div> 
        
        )
    }
}

export default Comment