// Cesar me explicou
import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';

function copyToClipboard(url, idRecipe) {
  document.getElementById('share-button').innerHTML = 'Link copiado!';
  if (url.includes('comida')) {
    copy(`http://localhost:3000/comidas/${idRecipe}`)
      .then(() => alert('Link copiado'));
  }
  if (url.includes('bebida')) {
    copy(`http://localhost:3000/bebidas/${idRecipe}`)
      .then(() => alert('Link copiado'));
  }
}
// honestidade acadêmica: ajuda do grupo 4

function ShareButton(props) {
  const { idRecipe, url } = props;
  /* const { pathname } = props.url.location;
  console.log(pathname); */
  return (
    <div className="icon">
      <button
        id="share-button"
        style={{ textDecoration: 'none' }}
        type="image"
        data-testid="share-btn"
        // value={pathname}
        onClick={() => copyToClipboard(url, idRecipe)}
      >
        <img src={shareIcon} alt="Share Button" />
      </button>
    </div>
  );
}

export default ShareButton;

ShareButton.propTypes = {
  url: PropTypes.shape({
    location: PropTypes.string.isRequired,
  }).isRequired,
  idRecipe: PropTypes.number.isRequired,
};
