import React from 'react';
import './App.css';
// import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';
import movies from './data';


function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={movies} />
    </div>
  );
}

export default App;
