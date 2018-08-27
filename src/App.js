import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import YoutubeSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
YoutubeSearch({ key: YOUTUBE_API_KEY, term: 'ジョジョ　4部'}, (data) => {
  console.log(data);
});

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
