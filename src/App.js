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


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: {},
      pictures: [],
      comments: []
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      api.auth.getCurrentUser().then(user => {
        const currentUser = user ;
        this.setState({ currentUser });
      });
    };
      this.setState({pictures: api.pictures.getPictures})
  };

  handleLogin = json => {
    const currentUser = json;
    localStorage.setItem('token', currentUser.jwt );
    this.setState({ currentUser });
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
        <Route exact path="/" component={Home} />
        <Route exact path="/login"   render={(props) => <Login {...props} handleLogin={this.handleLogin}/>} />
        <Route exact path="/signup"   render={(props) => <SignUp {...props} handleLogin={this.handleLogin}/>} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/addpicture" component={PostPicture} />
      </div>
    </Router>
    );
  }
}


export default App;
