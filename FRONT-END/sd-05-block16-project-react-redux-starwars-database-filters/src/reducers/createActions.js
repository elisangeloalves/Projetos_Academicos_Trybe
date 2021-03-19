import {
  FETCH_DATA,
  GET_RESULTS,
  GET_ERROR,
  FILTER_BY_NUMERIC_VALUES,
  FILTER_BY_NAME,
  FILTER_BY_COLUMN,
  FILTER_BY_COMPARISON,
  FILTER_BY_VALUE,
  SELECTED_COLUMN,
  SELECTED_RADIO,
  SORTED_COLUMN,
} from './actions';
/*
 estrutura modelo de uma action;

 export const actionName = (optionalParam) => ({
  type: ACTION_TYPE,
  payload: optionalParam,
 });
*/

export const requestData = () => ({
  type: FETCH_DATA,
});

export const sortedColumn = (sortedPlanets) => ({
  type: SORTED_COLUMN,
  payload: sortedPlanets,
});

export const getResults = (data) => ({
  type: GET_RESULTS,
  payload: data,
});

export const getError = (error) => ({
  type: GET_ERROR,
  payload: error,
});

export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  payload: {
    name,
  },
});

export const filterByNumericValues = () => ({
  type: FILTER_BY_NUMERIC_VALUES,
});

export const filterByColumn = (e) => ({
  type: FILTER_BY_COLUMN,
  payload: e.target.value,
});

export const filterByComparison = (e) => ({
  type: FILTER_BY_COMPARISON,
  payload: e.target.value,
});

export const filterByValue = (e) => ({
  type: FILTER_BY_VALUE,
  payload: e.target.value,
});

export const sortByColumn = (e) => ({
  type: SELECTED_COLUMN,
  payload: e.target.value,
});

export const sortByAttribute = (event) => ({
  type: SELECTED_RADIO,
  payload: event.target.value,
});
