import { GET_PLAYER_INFO, GET_PLAYER_SCORE } from '../actions/types';

const INITIAL_STATE = {
  player: {
    name: '',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
  },
};

function savePlayerInfo(state, action) {
  localStorage.setItem('state', JSON.stringify({
    ...state,
    player: {
      ...state.player,
      name: action.player.name,
      gravatarEmail: action.player.email,
    },
  }));
}

function savePlayerScore(state, value) {
  localStorage.setItem('state', JSON.stringify({
    ...state,
    player: {
      ...state.player,
      assertions: state.player.assertions + 1,
      score: state.player.score + value.player.score,
    },
  }));
}

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PLAYER_INFO:
      savePlayerInfo(state, action);
      return {
        ...state,
        player: {
          ...state.player,
          name: action.player.name,
          gravatarEmail: action.player.email,
        },
      };
    case GET_PLAYER_SCORE:
      savePlayerScore(state, action);
      return {
        ...state,
        player: {
          ...state.player,
          assertions: state.player.assertions + 1,
          score: state.player.score + action.player.score,
        },
      };
    default:
      return state;
  }
};

export default playerReducer;
