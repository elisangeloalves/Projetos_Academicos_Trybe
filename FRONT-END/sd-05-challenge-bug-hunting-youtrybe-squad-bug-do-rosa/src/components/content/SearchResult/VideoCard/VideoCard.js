import React, { Component } from 'react';

import '../../../../css/searchResult.css';

class VideoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="suggested-video search-result">
        <div className="thumbnail">
          <img
            alt="thumbnail"
            src={this.props.video.snippet.thumbnails.medium.url}
          />
          {this.props.video.id.kind === 'youtube#video' ? <span>17:30</span> : null}
        </div>

        <div className="thumbnail-info">
          <h2>{this.props.video.snippet.title}</h2>
          <div className="channel">{this.props.video.snippet.channelTitle}</div>
          {this.props.video.id.kind === 'youtube#video' ? <div className="views">792K views</div> : null}
          <p className="description">{this.props.video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoCard;
