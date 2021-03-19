// Referência:
// https://github.com/zalmoxisus/redux-devtools-extension#installation - Seção 1.3

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
