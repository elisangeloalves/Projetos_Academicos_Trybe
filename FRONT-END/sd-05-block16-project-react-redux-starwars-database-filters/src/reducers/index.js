import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import filters from './filterReducer';

const reducer = combineReducers({
  fetchReducer,
  filters,
});
// implementacoes dos parametros baseados em referencias dos exercicios e conteudos do course


// export const store = createStore(reducer,
// applyMiddleware(thunk)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// );
// store.subscribe(() => console.log(store.getState()));
export default reducer;
