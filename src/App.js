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






class App extends Component {
  constructor() {
    super()
    this.state = {
      current_user: {},
      pictures: [],
      users: [],
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
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/profile" component={ProfilePage} />
      </div>
    </Router>
    );
  }
}


export default App;
