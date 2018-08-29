import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Video from './components/Video/Video';
import List from './components/Video/List/List';
import YoutubeSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends Component {

  state = { videos: [] }

  componentDidMount() {
    YoutubeSearch({ key: YOUTUBE_API_KEY, term: 'ジョジョ　4部'}, (data) => {
      this.setState({ videos: data })
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Body>
          <Video video={this.state.videos[0]}/>
          <List videos={this.state.videos}/>
        </Body>
      </div>
    );
  }
}

export default App;
