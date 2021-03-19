import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InstructionsDetail extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <div className="instructions-details">
        <h4>Instructions</h4>
        <p data-testid="instructions">{this.props.instructions}</p>
      </div>
    );
  }
}

export default InstructionsDetail;


InstructionsDetail.propTypes = {
  instructions: PropTypes.string.isRequired,
};
