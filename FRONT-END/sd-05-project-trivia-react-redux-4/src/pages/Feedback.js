import React from 'react';
import { Link } from 'react-router-dom';
import md5 from 'crypto-js/md5';

class Feedback extends React.Component {
  render() {
    const avatar = localStorage.getItem('token');
    const results = JSON.parse(localStorage.getItem('state'));
    const message = results.player.assertions >= 3 ? 'Mandou bem!' : 'Podia ser melhor...';
    return (
      <div>
        <header>
          <img
            src={`https://www.gravatar.com/avatar/${md5(avatar).toString()}`}
            alt="player avatar"
            data-testid="header-profile-picture"
          />
          <h1 data-testid="header-player-name">{results.player.name}</h1>
          <p data-testid="header-score">{results.player.score}</p>
        </header>
        <p data-testid="feedback-text">{message}</p>
        <h2 data-testid="feedback-total-score">{`Total score: ${results.player.score}`}</h2>
        <h3 data-testid="feedback-total-question">
          {`You got ${results.player.assertions}/5 correct answers`}
        </h3>
        <Link to="/">
          <button data-testid="btn-play-again">Jogar novamente</button>
        </Link>
        <Link to="/ranking">
          <button data-testid="btn-ranking">Ver Ranking</button>
        </Link>
      </div>
    );
  }
}

export default Feedback;
