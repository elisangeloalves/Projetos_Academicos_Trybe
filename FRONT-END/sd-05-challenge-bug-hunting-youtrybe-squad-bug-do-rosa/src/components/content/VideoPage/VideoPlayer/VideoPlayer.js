import React, { Component } from 'react';

import '../../../../css/chanelInfo.css';

class VideoPlayer extends Component {
  render() {
    const { embedId } = this.props;
    const playerURL = `https://www.youtube.com/embed/${embedId}`;
    return (
      <div className="youtube-player">
        <iframe width="100%" height="470" src={playerURL} frameBorder="0" data-testid="videoplayer"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    );
  }
}

export default VideoPlayer;