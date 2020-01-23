import React, {Component} from 'react';
import api from '../services/Api';
import { NavLink } from 'react-router-dom';



class ProfilePage extends Component{
    constructor() {
        super()
        this.sttate = {
            currentUser: {},
            userDetails: {}
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        if (token) {
            api.auth.getCurrentUser().then(user => {
            this.setState({currentUser: user })})
            .then(() => {
                api.getUser(this.state.currentUser.id).then(res => this.setState({userDetails: res.data}))
             })
            }
    }

    render() {
    return (
        <div className="profilePage">
            <h1>Welcome {this.props.currentUser.username}</h1>

        </div>
    )
    }
}

export default ProfilePage