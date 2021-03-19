import { GET_GAME_TIMER, STOP_TIMER, NEXT_QUESTION } from '../actions/types';

const initialState = {
  timer: 30,
  countdown: true,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAME_TIMER:
      if (state.timer > 0 && state.timer <= 30 && state.countdown) {
        return { ...state, timer: state.timer - 1 };
      }
      clearTimeout();
      return state;
    case STOP_TIMER:
      return { ...state, countdown: false };
    case NEXT_QUESTION:
      return { ...state, timer: 30, countdown: true };
    default:
      return state;
  }
};

export default gameReducer;
