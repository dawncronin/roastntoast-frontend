import React, {Component} from 'react';
import api from '../services/Api';


class Comment extends Component{
    constructor() {
        super()
        this.state = {
            comment: []
        }
    }

    componentDidMount() {
        api.comments.getComment(this.props.comment.id).then(res => {
            this.setState({comment: res.data})
        })
    }
   


    render() {
        let comUser = this.state.comment.attributes ? this.state.comment.attributes.user.username : ""
        let likes = this.state.comment.attributes ? this.state.comment.attributes.likes.length : ""
        let dislikes = this.state.comment.attributes ? this.state.comment.attributes.likes.length : ""

        return (
            <div className="comment">
                <h3>{comUser}:{this.props.comment.text}</h3>
                <h4> Like: {likes}</h4>
                <h4> Dislike: {dislikes}</h4>
            </div> 
        
        )
    }
}

export default Comment