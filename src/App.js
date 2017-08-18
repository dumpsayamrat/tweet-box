import React, { Component } from 'react';

import TweetHome from './TweetHome';
import TweetHomeRecompose from './TweetHomeRecompose';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tweet Box</h2>
        </div>
        <TweetHomeRecompose />
        <hr />
        <TweetHome />
      </div>
    );
  }
}

export default App;
