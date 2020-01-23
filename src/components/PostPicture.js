import React, {Component} from 'react';


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
        fetch('http://localhost:3000/pictures/')
        .then(response => response.json())
        .then(json => console.log(json))
    }
    
    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    render(){
        return (
            <div>
                <form onSubmit ={this.handleSubmit}>
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