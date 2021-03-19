import React, { Component } from 'react';

class VideoThumbNailInfo extends Component {
  render() {
    return (
      <div className="thumbnail-info">
        <h2>{this.props.title}</h2>
        <div className="channel">{this.props.channel}</div>
        <div className="views">792K views</div>
      </div>
    );
  }
}

export default VideoThumbNailInfo;