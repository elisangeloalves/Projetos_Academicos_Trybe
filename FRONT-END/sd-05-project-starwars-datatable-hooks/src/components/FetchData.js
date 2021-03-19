// import { requestData, getResults, getError } from '../reducers/createActions';

const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function fetchData() {
  return fetch(API)
    .then((response) => response.json())
    .then(
      (obj) => obj.results,
      (error) => (error.message || error),
    );
}
