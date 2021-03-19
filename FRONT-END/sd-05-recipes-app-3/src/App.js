import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import MainFood from './pages/MainFood';
import MainDrink from './pages/MainDrink';
import FoodDetails from './pages/FoodDetails';
import DrinkDetails from './pages/DrinkDetails';
import Explore from './pages/Explore';
import ExploreDrink from './pages/ExploreDrink';
import ExploreDrinkIngredient from './pages/ExploreDrinkIngredient';
import ExploreFood from './pages/ExploreFood';
import ExploreFoodIngredient from './pages/ExploreFoodIngredient';
import ExploreFoodOrigin from './pages/ExploreFoodOrigin';
import NotFound from './pages/NotFound';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Profile from './pages/Profile';
import OngoingRecipe from './pages/OngoingRecipe';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          exact path="/bebidas/:idRecipe"
          render={(props) => <DrinkDetails {...props} /* type="bebidas" *//>}
        />
        <Route
          exact path="/comidas/:idRecipe"
          render={(props) => <FoodDetails {...props} /* type="comidas" */ />}
        />
        <Route
          exact path="/comidas/:idRecipe/in-progress"
          render={(props) => <OngoingRecipe {...props} /* type="comidas" */ />}
        />
        <Route
          exact path="/bebidas/:idRecipe/in-progress"
          render={(props) => <OngoingRecipe {...props} type="bebidas" />}
        />
        <Route exact path="/comidas" component={MainFood} />
        <Route exact path="/bebidas" component={MainDrink} />
        <Route exact path="/explorar" component={Explore} />
        <Route exact path="/explorar/comidas" component={ExploreFood} />
        <Route exact path="/explorar/bebidas" component={ExploreDrink} />
        <Route exact path="/explorar/comidas/ingredientes" component={ExploreFoodIngredient} />
        <Route exact path="/explorar/bebidas/ingredientes" component={ExploreDrinkIngredient} />
        <Route exact path="/explorar/comidas/area" component={ExploreFoodOrigin} />
        <Route exact path="/explorar/bebidas/area" component={NotFound} />
        <Route path="/perfil" component={Profile} />
        <Route path="/receitas-feitas" component={DoneRecipes} />
        <Route path="/receitas-favoritas" component={FavoriteRecipes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
