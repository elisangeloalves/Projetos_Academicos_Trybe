// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <span className="rating">{this.props.rating}</span>
    );
  }
}

export default Rating;
