import React, { Component, Fragment } from 'react';
import profileIcon from './../../../../assets/profile.jpg'

class VideoPlayerUsersComments extends Component {

  formatDate(publishedAt) { // colocar o bug aqui de data nao formatada
    const dateObj = new Date(publishedAt)

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const month = monthNames[dateObj.getMonth()];
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    return `Published on ${month} ${day}, ${year}`
  }
  render() {

    const { videoComments } = this.props;
    // authorProfileImageUrl
    return (
      <Fragment>
        {
          videoComments.map((comment) => (
            <div className="comment" key={comment.id}>
              <div className="comment-avatar">
                <i className="material-icons account-icon">account_circle</i>
              </div>
              <div className="comment-info">
                <h3>{comment.snippet.topLevelComment.snippet.authorDisplayName}
                  <span>
                    {this.formatDate(comment.snippet.topLevelComment.snippet.publishedAt)}
                  </span>
                </h3>
                <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                <div>
                  <a className="thumb-up-btn">
                    <i className="material-icons">thumb_up</i>
                    <span className="thumbs-count">
                      {comment.snippet.topLevelComment.snippet.likeCount}
                    </span>
                  </a>
                  <a className="thumb-up-btn">
                    <i className="material-icons">thumb_down</i>
                    <span className="thumbs-count"></span>
                  </a>
                  <a>REPLY</a>
                </div>
              </div>
            </div>
          ))
        }
      </Fragment>
    );
  }
}

export default VideoPlayerUsersComments;