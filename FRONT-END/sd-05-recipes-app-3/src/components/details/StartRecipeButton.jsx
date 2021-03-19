import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/details.css';

class StartRecipe extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    const { literals } = this.props;
    console.log(this.props);
    return (
      <div className="start-recipe-button">
        <Link to={literals}>
          <button
            /* className="button-iniciar" */
            data-testid="start-recipe-btn"
          >
            Iniciar Receita
          </button>
        </Link>
      </div>
    );
  }
}

export default StartRecipe;

StartRecipe.propTypes = {
  literals: PropTypes.string.isRequired,
};
