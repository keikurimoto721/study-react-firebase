import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
require('dotenv').config();

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends Component {

  render() {
    console.log('youtubeですぞ');
    console.log(YOUTUBE_API_KEY);
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
