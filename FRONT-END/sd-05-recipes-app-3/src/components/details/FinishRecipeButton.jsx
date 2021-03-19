import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/details.css';

class FinishRecipeButton extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    const { literals } = this.props;
    console.log(this.props);
    return (
      <div className="finish-recipe-button">
        <Link to={literals}>
          <button data-testid="finish-recipe-btn" type="button" id="btn" disabled>
            Finalizar Receita
          </button>
        </Link>
      </div>
    );
  }
}

export default FinishRecipeButton;

FinishRecipeButton.propTypes = {
  literals: PropTypes.string.isRequired,
};
