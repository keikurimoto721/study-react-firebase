import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Video from './components/Video/Video';
import List from './components/Video/List/List';
import YoutubeSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends Component {

  state = { videos: [],
            selectedVideo: null}

  componentDidMount() {
    YoutubeSearch({ key: YOUTUBE_API_KEY, term: 'ジョジョ OP'}, (data) => {
      this.setState({ videos: data, selectedVideo: data[0] })
    });
  }

  onVideoClicked = (video) => {
    this.setState({selectedVideo: video })
  }

  onKeywordChanged = (keyword) => {
    let newTerm = 'ジョジョ ' + keyword;
    if (keyword === '') {
      newTerm = 'ジョジョ OP';
    }
    YoutubeSearch({ key: YOUTUBE_API_KEY, term: newTerm}, (data) => {
      this.setState({ videos: data, selectedVideo: data[0] })
    });
  }

  render() {
    return (
      <div className="App">
        <Header onChanged={this.onKeywordChanged}/>
        <Body>
          <Video video={this.state.selectedVideo}/>
          <List videos={this.state.videos}
                selectedVideo={this.state.selectedVideo}
                onClicked={this.onVideoClicked}
          />
        </Body>
      </div>
    );
  }
}

export default App;
