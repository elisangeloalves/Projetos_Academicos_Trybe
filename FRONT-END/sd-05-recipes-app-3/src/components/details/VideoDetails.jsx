import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VideoDetails extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <div className="video-details">
        <video data-testid="video" width="320" height="240" controls>
          <source src={this.props.youtube} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default VideoDetails;


VideoDetails.propTypes = {
  youtube: PropTypes.string.isRequired,
};
