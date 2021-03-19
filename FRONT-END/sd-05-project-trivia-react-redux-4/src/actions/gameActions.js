import { GET_GAME_TIMER, NEXT_QUESTION, STOP_TIMER } from './types';

export const getGameTimer = (timer) => ({
  type: GET_GAME_TIMER,
  timer,
});

export const nextQuestion = () => ({
  type: NEXT_QUESTION,
});

export const stopTimer = () => ({
  type: STOP_TIMER,
});
