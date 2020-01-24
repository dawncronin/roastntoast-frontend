import React, {Component} from 'react';
import './App.css';
import api from './services/Api';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Gallery from './containers/Gallery';
import Home from './components/Home';
import ProfilePage from './containers/ProfilePage';
import PostPicture from './components/PostPicture';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PicturesPage from './containers/PicturesPage';

class App extends Component {
  constructor() {
    super()
    this.state = {
      roast: true,
      currentUser: {},

    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      api.auth.getCurrentUser().then(user => {
        this.setState({currentUser: user });
      });
    }
  }

  componentDidUpdate() {
      // if (this.state.roast) {
      //   document.querySelector(".picturesPage").style.backgroundColor = "#F75E1B";
      // }
      // else if (this.state.roast === false) {
      //   document.querySelector(".picturesPage").style.backgroundColor ="#A9F3FA";
      // }
      // else {
      //   document.querySelector(".picturesPage").style.backgroundColor = "#ccc";
      // }
  }
    
  flipRoast = () => {
    this.setState({roast: !this.state.roast})
  }

  handleLogin = json => {
    const currentUser = json;
    localStorage.setItem('token', currentUser.jwt );
    this.setState({ currentUser: {username: currentUser.user.data.attributes.username, id: currentUser.user.data.id }});
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ currentUser: {} });
  };

  render() {
    return (
      <Router>
      <div className="app">
        <NavBar handleLogout={this.handleLogout} currentUser={this.state.currentUser}/>
        <Route exact path="/" render={(props) => <Home {...props} currentUser={this.state.currentUser}/>} />
        <Route exact path="/login"   render={(props) => <Login {...props} handleLogin={this.handleLogin}/>} />
        <Route exact path="/signup"   render={(props) => <SignUp {...props} handleLogin={this.handleLogin}/>} />
        <Route exact path="/gallery" render ={(props) => <Gallery {...props} pictures={this.state.pictures}/>} />
        <Route exact path="/profile" render ={(props) => <ProfilePage {...props} currentUser={this.state.currentUser}/>} />
        <Route exact path="/addpicture" render ={(props) => <PostPicture {...props} currentUser={this.state.currentUser}/>} />
        <Route path={`/pictures`} render={(props) => <PicturesPage {...props} 
              flipRoast={this.flipRoast} roast={this.state.roast} 
              currentUser={this.state.currentUser}/>} />

        <div className="footer">
          Allen & Dawn Productions  <br/>
          2020

        </div>
      </div>
    </Router>
    );
  }
}


export default App;
