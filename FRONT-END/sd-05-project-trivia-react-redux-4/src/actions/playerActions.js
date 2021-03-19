import { GET_PLAYER_INFO, GET_PLAYER_SCORE } from './types';

export const getPlayerInfo = (name, email) => ({
  type: GET_PLAYER_INFO,
  player: {
    name,
    email,
  },
});

export const getPlayerScore = (score) => ({
  type: GET_PLAYER_SCORE,
  player: {
    score,
  },
});
