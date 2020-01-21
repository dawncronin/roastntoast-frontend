import React, {Component} from 'react';
import api from '../services/Api';



class Login extends Component {
    constructor() {
        super();
        this.state= {
            error: false,
            fields: {
                username:'',
                password:''
            }
        }
    }
    handleChange = e => {
        const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
        this.setState({ fields: newFields });
    };

    handleSubmit = e => {
        e.preventDefault();
        api.auth.login(this.state.fields.username, this.state.fields.password)
        .then(json => {
          if ( json.error ) {
            this.setState({ error: true })
          } else {
            this.props.handleLogin(json);
            this.props.history.push('/');
          };
        });
      };

    render() {
    return (
        <div className="login">
            <h1> Login:</h1>
            {this.state.error ? <h2>Try Again</h2> : null}
            <form className="loginForm" onSubmit={this.handleSubmit}>
                <label> Username
                <input type="text" name="username" onChange={this.handleChange}/>
                </label> <br/>
                <label> Password
                <input type="password" name="password" onChange={this.handleChange}/> 
                </label> <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
    }
}

export default Login