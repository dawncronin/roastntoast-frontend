import React, {Component} from 'react';
import Comment from "./Comment"
import AddComment from "./AddComment"
import { render } from '@testing-library/react';
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
        console.log(this.props.match)
       return api.pictures.getPicture(this.props.match.params.pictureId).then(picture => {
           console.log(picture)
            this.setState({picture: picture.data}) 
            let comments = picture.data.attributes.comments.filter(com => com.roast === this.props.roast)
            comments = comments.map(com => < Comment handleCommentDelete={this.handleCommentDelete} comment={com} key={com.id} currentUser={this.state.currentUser}/>)
            this.setState({comments: comments})
            return picture
        })  
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

    
    render() {   
        return ( 
            this.state.picture.attributes ? (
            <div>
            <img src={this.state.picture.attributes.img_url} alt={"picture"} width="600"/>
            < AddComment roast={this.props.roast} currentUser={this.state.currentUser} pictureId={this.state.picture.id} handleNewComment={this.handleNewComment}/>
            {this.state.comments}
            </div>
            ) :
            <div>loading</div>
        )
    }
}

export default ShowPicture