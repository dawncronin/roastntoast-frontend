import React, {Component} from 'react';
import api from '../services/Api';
import { NavLink } from 'react-router-dom';
import PictureProfile from '../components/PictureProfile'



class ProfilePage extends Component{
    constructor() {
        super()
        this.state = {
            // currentUser: {},
            userDetails: null
        }
    }

    componentDidMount() {
        console.log("Profile mounted.")

        console.log(this.state.currentUser)
        const token = localStorage.getItem('token');
        if (token) {
            
            api.getUser(this.props.currentUser.id).then(res => {
                console.log(res.data)
                this.setState({userDetails: res.data})
            })


        //     api.auth.getCurrentUser().then(user => {
        //     console.log(user)
        //     this.setState({ currentUser: user })})
        //     .then(() => {
        //         api.getUser(this.state.currentUser.id).then(res => {
        //             console.log(res.data)
        //             this.setState({userDetails: res.data})})
        //         })  
        }
    }

    componentDidUpdate(){
        if (!this.state.userDetails) {
            console.log("Profile updated.")
            const token = localStorage.getItem('token');
            if (token) {
            api.getUser(this.props.currentUser.id).then(res => {
                console.log(res.data)
                this.setState({userDetails: res.data})})
        }
        }
    }

    componentWillUnmount(){
        this.setState({
            currentUser: {},
            userDetails: {}
        })
    }
    
    userDelete = () => {
        api.deleteUser(this.props.currentUser.id).then(json => {console.log(json)})
    }

    render() {
    let details
    if(this.state.userDetails) {
        // if(this.props.currentUser.id.toString() === this.state.userDetails.id){
        details = this.state.userDetails.attributes.pictures.map(picture => <PictureProfile key = {picture.id} id = {picture.id} attribute = {picture}/>)  
    } else {
        details = "Loading..."
    }
    // }
   
    return (
        <div className="profilePage">
            <h1>Welcome {this.props.currentUser.username}</h1>
            {details}
            <button onClick ={this.userDelete}>Delete Your Account!</button>
        </div>
        )
    }
}

export default ProfilePage