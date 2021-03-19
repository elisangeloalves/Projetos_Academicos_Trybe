import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoPlayerDescription from './VideoPlayer/VideoPlayerDescription';
import VideoPlayerInfo from './VideoPlayer/VideoPlayerInfo';
import VideoPlayerComments from './VideoPlayerComments/VideoPlayerComments';
import VideoSideBar from './VideoSideBar/VideoSideBar';
import { getVideoInfo, getVideoComments } from './../../../api/service';
// import { getVideoInfo, getVideoComments } from './../../../api/api';


class VideoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: this.props.match.params.videoId,
      relatedVideos: this.props.location.state.data,
      videoInfo: null,
      videoComments: null,
    };

    this.handleSelectedVideo = this.handleSelectedVideo.bind(this)
  }

  componentDidMount() {
    getVideoInfo(this.state.videoId)
      .then((data) => {
        // console.log(data)

        this.setState({ videoInfo: data });
      })
      
      getVideoComments(this.state.videoId)
      .then((data) => {
        this.setState({ videoComments: data })
        // console.log(data)
      });
  }

  handleSelectedVideo(videoId) {
    getVideoInfo(this.state.videoId)
    .then((data) => this.setState({ videoInfo: data }));
    this.setState({ videoId: videoId })

    getVideoComments(this.state.videoId)
      .then((data) => this.setState({ videoComments: data}));
    this.props.history.push(`/watch/${videoId}`);
  }

  render() {
    if (!this.state.videoInfo || !this.state.videoComments)
      return <main></main>;

    return (
      <main>
        <section className="player">
          <VideoPlayer embedId={this.state.videoId} />
          <VideoPlayerInfo
            statisticsInfo={this.state.videoInfo.statistics}
            title={this.state.videoInfo.snippet.title}
          />
          <VideoPlayerDescription
            channelTitle={this.state.videoInfo.snippet.channelTitle}
            description={this.state.videoInfo.snippet.description}
            publishedAt={this.state.videoInfo.snippet.publishedAt}
          />
          <VideoPlayerComments
            statisticsInfo={this.state.videoInfo.statistics}
            videoComments={this.state.videoComments}
          />
        </section>
        <section className="sidebar">
          <VideoSideBar relatedVideos={this.state.relatedVideos} handleSelectedVideo={this.handleSelectedVideo} />
        </section>
      </main>
    );
  }
}

export default VideoPage;
