import React, { Component } from 'react';
import VideoPlayerCommentsInfo from './VideoPlayerCommentsInfo';
import VideoPlayerUserComments from './VideoPlayerUsersComments';

import '../../../../css/comments.css';

class VideoPlayerComments extends Component {
  render() {
    const { statisticsInfo, videoComments } = this.props;
    return (
      <section data-testid='comments' className="comments">
        <VideoPlayerCommentsInfo statisticsInfo={statisticsInfo}/>
        <VideoPlayerUserComments videoComments={videoComments}/>
      </section>
    );
  }
}

export default VideoPlayerComments;