import React, {Component} from 'react';
import api from '../services/Api'

class PostPicture extends Component{
    constructor(){
        super()
        this.state = {
            img_url: '',
            roast_bio: '',
            toast_bio: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        api.pictures.postPicture({img_url: this.state.img_url, roast_bio: this.state.roast_bio, toast_bio: this.state.toast_bio, user_id: this.props.currentUser.id})
        .then(json => {
            console.log(json)
            if (!json.message) {
            this.props.history.push(`/pictures/${json.picture.data.id}`)
            }
        })
    }
    
    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }

    render(){
        return (
            <div className= 'picturepost'>
                <h3> Add a new picture:</h3>
                <form className ='picturepostform' onSubmit ={this.handleSubmit}>
                    <label>Img URL: 
                    <input onChange = {this.handleChange} type = 'text' name = 'img_url'/><br></br>
                    </label>
                    <label>Roast Bio:
                    <input onChange = {this.handleChange} type = 'text' name = 'roast_bio'/><br></br>
                    </label>
                    <label>Toast Bio:
                    <input onChange = {this.handleChange} type = 'text' name = 'toast_bio'/><br></br>
                    </label>
                    <input type = 'submit' name = 'submit'/>
                </form>
            </div>
        )
    }
}

export default PostPicture