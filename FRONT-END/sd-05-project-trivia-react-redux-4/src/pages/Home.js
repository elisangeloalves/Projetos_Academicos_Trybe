import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import tokenRequest from '../service/api';
import { getPlayerInfo } from '../actions/playerActions';

function settingsButton() {
  return (
    <Link to="/settings">
      <button type="button" data-testid="btn-settings">
        Configurações
      </button>
    </Link>
  );
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gravatarEmail: '',
    };
  }

  getUserInfo() {
    const { playerInfo } = this.props;
    const { name, gravatarEmail } = this.state;
    playerInfo(name, gravatarEmail);
    tokenRequest();
  }

  inputForm() {
    const { name, gravatarEmail } = this.state;
    return (
      <form>
        <label htmlFor="player-email">E-mail do Gravatar</label>
        <input
          type="email" id="player-email"
          data-testid="input-gravatar-email"
          value={gravatarEmail}
          onChange={(event) => this.setState({ gravatarEmail: event.target.value })}
        />
        <label htmlFor="player-name">Nome do jogador</label>
        <input
          type="text" id="player-name"
          data-testid="input-player-name"
          value={name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <Link to="/game">
          <button
            type="button"
            data-testid="btn-play"
            onClick={() => this.getUserInfo()}
            disabled={(name.length && gravatarEmail.length) === 0}
          >
            Jogar
          </button>
        </Link>
      </form>
    );
  }

  render() {
    return (
      <section>
        {this.inputForm()}
        {settingsButton()}
      </section>
    );
  }
}

const mapDispatchToProps = {
  playerInfo: getPlayerInfo,
};

Home.propTypes = {
  playerInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
