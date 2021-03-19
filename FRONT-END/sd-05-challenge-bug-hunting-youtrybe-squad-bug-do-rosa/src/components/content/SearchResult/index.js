import React, { Component } from 'react';
import VideoCard from './VideoCard/VideoCard';
import { Link } from 'react-router-dom';

import '../../../css/sideBar.css';
import { searchVideos } from '../../../api/service';
// import { searchVideos } from '../../../api/api';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: '',
    };
  }

  componentDidMount() {
    const {
      params: { searchParam },
    } = this.props.match;
    // console.log(searchParam)
    console.log('match search:', searchParam);
    
    searchVideos(searchParam)
    // .then(data => data.json())
    .then((data) => {
      console.log("data:", data.items);
      this.setState({ data: data.items });
    }).catch(error => {
      this.setState({error: error})
    })
  }
  
  render() {
    const { data, error } = this.state;
    
    if (error) return (<div>{error.message}</div>)
    if (data.length < 1) return (<div>Loading...</div>)
    return (
      <div>
        {data.map((item) => (
          <Link className="thumbnail-card" key={item.etag} to={{
            pathname: `/watch/${item.id.videoId}`,
            state: { data: data }
          }}><VideoCard video={item} /></Link>
        ))}
      </div>
    );
  }
}

export default SearchResult;
