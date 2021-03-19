import React, { useEffect, useContext } from 'react';
import Table from './Table';
import FilterBar from './FilterBar';
import fetchData from './FetchData';
import StarWarsContext from '../context/StarWarsContext';

const MainPage = () => {
  const { setData, setIsFetching, isFetching, setError, sortingColumn,
  } = useContext(StarWarsContext);

  useEffect(() => {
    fetchData()
    .then((planet) => {
      setData([...planet]);
      setIsFetching(false);
      return planet;
    }).then((data) => sortingColumn(data, 'ASC', 'name', setData))
    .catch((error) => setError(error));
  }, []);

  return (
    <div>
      <FilterBar />
      {isFetching ? <div className="loading">Loading...</div>
      : <Table />}
    </div>
  );
};

export default MainPage;
