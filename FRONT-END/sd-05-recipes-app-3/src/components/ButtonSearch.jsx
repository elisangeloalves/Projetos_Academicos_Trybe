import React from 'react';
import PropTypes from 'prop-types';
// import '../css/SearchBar.css';

function ButtonSearch(props) {
  const { onClick } = props;
  return (
    <div className="searchBarButton">
      <button data-testid="exec-search-btn" type="button" onClick={onClick}>
        Buscar
      </button>
    </div>
  );
}

export default ButtonSearch;

ButtonSearch.propTypes = {
  onClick: PropTypes.func.isRequired,
};
