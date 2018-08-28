import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import YoutubeSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends Component {

  state = { videos: [] }

  componentDidMount() {
    YoutubeSearch({ key: YOUTUBE_API_KEY, term: 'ジョジョ　4部'}, (data) => {
      this.setState({ videos: data })
      console.log(data);
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
