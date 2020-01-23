import React, {Component} from 'react';
import { render } from '@testing-library/react';
import api from '../services/Api'


class AddComment extends Component {
    constructor() {
        super()
        this.state = {
            commentText: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleNewComment({picture_id: this.props.pictureId, roast: this.props.roast, user_id: this.props.currentUser.id, text: this.state.commentText}).then( () => {
            this.setState({commentText: ""})
        })
    }

    handleChange = (e) => {
        this.setState({commentText: e.target.value})
    }


    render() {
    return (
        <div className="addComment">
           <form onSubmit={this.handleSubmit}>
               <label> Add a Comment:
               <textarea name="text" value={this.state.commentText} onChange={this.handleChange} placeholder= {this.props.roast ? "add a new roast" : "add a new toast"}/>
               </label>
               <input type="submit" name="submit"/>
           </form>
        </div>
    )
    }
}

export default AddComment