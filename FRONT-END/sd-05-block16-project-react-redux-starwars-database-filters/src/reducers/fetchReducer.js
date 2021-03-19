import {
  FETCH_DATA,
  GET_ERROR,
  GET_RESULTS,
  SORTED_COLUMN,
} from './actions';

const initialState = {
  data: [],
  error: '',
  isFetching: false,
};

function fetchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case GET_RESULTS:
      return {
        ...state,
        data: [...action.payload],
        isFetching: false,
      };
    case GET_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case SORTED_COLUMN:
      return {
        ...state,
        data: [...action.payload],
      };

    default:
      return state;
  }
}

export default fetchReducer;
