import React from 'react';
import Item from '../Item/Item';

const List = (props) => {
  
  const Items = props.videos.map((video, index) => {
    if (props.selectedVideo.id.videoId !== video.id.videoId) {
      return(
        <Item video={video} key={index} onClicked={props.onClicked}/>
      );
    }
  });

  return (
    <ul className="col-md-4 list-group">
      {Items}
    </ul>
  );
};

export default List;