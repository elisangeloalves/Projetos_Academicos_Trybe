import React, { Component } from 'react';

class VideoThumbNail extends Component {
  render() {
    return (
      <div className="thumbnail">
        <img src={this.props.imageSource} alt="cabin" key={this.props.videoId}/>
        <span>17:30</span>
      </div>
    );
  }
}

export default VideoThumbNail;