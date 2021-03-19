import React, { Component } from 'react';

class VideoPlayerInfo extends Component {

  render() {
    const { title, statisticsInfo } = this.props;
    return (
      <div data-testid='videoinfo' className="video-info">
        <h1 className="title">
          {title}
        </h1>
        <div className="video-toolbar">
          <span className="video-views">
            {statisticsInfo.viewCount} views
        </span>
          <span className="right-menu">
            <div className="thumb-wrapper">
              <a className="thumb-up-btn">
                <i className="material-icons">thumb_up</i>
                <span className="thumbs-count">
                  {statisticsInfo.likeCount}
                </span>
              </a>

              <a className="thumb-down-btn">
                <i className="material-icons">thumb_down</i>
                <span className="thumbs-count">
                  {statisticsInfo.dislikeCount}
                </span>
              </a>
            </div>

            <a className="share-btn">
              <i className="material-icons">reply</i>
              <span>SHARE</span>
            </a>

            <a className="save-btn">
              <i className="material-icons">playlist_add</i>
              <span>SAVE</span>
            </a>
            <a className="options-btn">
              <i className="material-icons">more_horiz</i>
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default VideoPlayerInfo;