import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../css/details.css';

class ImageDetail extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    const { strOption, thumb } = this.props;
    return (
      <div className="image-details">
        <img alt={strOption} src={thumb} data-testid="recipe-photo" />
      </div>
    );
  }
}

export default ImageDetail;


ImageDetail.propTypes = {
  strOption: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};
