import React, {Component} from 'react';
import api from '../services/Api';

class SignUp extends Component {
    constructor() {
        super();
        this.state= {
            error: false,
            fields: {
                username:'',
                password:'',
                passwordConfirmation:''
            }
        }
    }

    handleChange = (e) => {
        const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
        this.setState({ fields: newFields });
    }

    handleSubmit = e => {
        e.preventDefault();
        api.signUp(this.state.fields.username, this.state.fields.password, this.state.fields.passwordConfirmation)
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
            <div className="signup">
                <h1> Sign Up</h1>
                {this.state.error ? <h3>Invalid Inputs, try again</h3> : null}
                <form className="signUpForm" onSubmit={this.handleSubmit}>
                    <label> Username
                    <input type="text" name="username" onChange={this.handleChange}/>
                    </label> <br/>
                    <label> Password
                    <input type="password" name="password" onChange={this.handleChange}/> 
                    </label> <br/>
                    <label>Confirm Password
                    <input type="password" name="passwordConfirmation" onChange={this.handleChange}/> <br/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
    )
    }
}

export default SignUp