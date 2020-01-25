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
            console.log(json)
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
            <h2> Login</h2>
            {this.state.error ? <h4>Invalid Username or Password, Try Again</h4> : null}
            <form className="loginForm" onSubmit={this.handleSubmit}>
                <label> 
                <input type="text" name="username" placeholder="username" onChange={this.handleChange}/>
                </label> <br/>
                <label>
                <input type="password" name="password" placeholder="password" onChange={this.handleChange}/> 
                </label> <br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
    }
}

export default Login