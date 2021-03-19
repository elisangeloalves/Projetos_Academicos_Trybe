import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class GameHeader extends Component {
  render() {
    const avatar = localStorage.getItem('token');
    const { name, score } = this.props.player;

    return (
      <header>
        <img
          src={`https://www.gravatar.com/avatar/${md5(avatar).toString()}`}
          alt="player avatar"
          data-testid="header-profile-picture"
        />
        <h1 data-testid="header-player-name">{name}</h1>
        <p data-testid="header-score">{score}</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.playerReducer.player,
});

GameHeader.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(GameHeader);
