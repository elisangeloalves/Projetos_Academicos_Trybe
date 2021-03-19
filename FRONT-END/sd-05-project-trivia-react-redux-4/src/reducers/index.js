import { combineReducers } from 'redux';

import playerReducer from './playerReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({ playerReducer, gameReducer });

export default rootReducer;
