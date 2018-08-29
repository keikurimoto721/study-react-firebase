import React from 'react';
import './Video.css';

const Video = (props) => {
  if (!props.video) {
    return (
      <div className="video col-md-8 videoBox">
        読み込み中
      </div>
    );
  }

  const videoUrl = 'https://www.youtube.com/embed/' + props.video.id.videoId;
  return (
    <div className="video col-md-8 videoBox">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={videoUrl}
          title={props.video.snippet.title}
        />
      </div>

      <div className="info">
        <div style={{ color: "white"}}>{props.video.snippet.title}</div>
        <div style={{ color: "white"}}>{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

export default Video;