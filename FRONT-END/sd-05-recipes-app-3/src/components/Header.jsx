import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar.jsx';
import '../css/Header.css';

function Header(props) {
  const [clicked, setClicked] = useState(false);
  const { title } = props;
  const titleToBeRendered = ['Explorar', 'Explorar Comidas', 'Explorar Bebidas', 'Explorar Ingredientes', 'Receitas Feitas', 'Perfil', 'Receitas Favoritas'];
  return (
    <div className="header">
      <div className="topbar">
        <div className="perfil">
          <Link to="/perfil">
            <img data-testid="profile-top-btn" src={profileIcon} alt="profile icon" />
          </Link>
        </div>
        <p className="titulo" data-testid="page-title" >{title}</p>
        {(titleToBeRendered.every((toBeRendered) => toBeRendered !== title)) ? (
          <div className="explorer">
            <button type="button" onClick={() => setClicked(!clicked)}>
              <img data-testid="search-top-btn" src={searchIcon} alt="profile icon" />
            </button>
          </div>
          ) : false
          }
      </div>
      <div className="searchBar">{clicked && <SearchBar />}</div>
    </div>
  );
}

export default Header;

Header.propTypes = {
  title: Proptypes.string.isRequired,
};
