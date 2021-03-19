import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import newMovie from './components/card0';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <header>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </header>
      {/* ADICIONAR CARTÃO */}
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/new" render={(props) => <NewMovie {...props} movie={newMovie} />} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/" render={(props) => <MovieDetails {...props} />} />
        <Route path="*" component={NotFound} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
