import React from 'react';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Discover from './components/discover/discover';
import DrinksIndexContainer from './components/drinks/drinks_index_container';
// import { DrinksShowContainer } from './components/drinks/drinks_show_container';

import IngredientsIndexContainer from './components/ingredients/ingredients_index_container';
import IngredientShow from './components/ingredients/ingredient_show';

function App() {
  return (
    <div className="shake-it-up-container">
      {/* <Link to="/"> */}
      <h1>Shake It Up</h1>
      {/* </Link> */}
      <br /><br />
      {/* <Discover/> */}

      <Switch>
        <Route exact path="/ingredients" component={IngredientsIndexContainer} />
        <Route exact path="/ingredients/:ingredient_name" component={IngredientShow} />
        <Route exact path="/drinks" component={DrinksIndexContainer} />
        <Route path="/" component={Discover} />
        {/* <Route exact path="/drinks/:drink_id" component={DrinksShowContainer}/> */}
      </Switch>

    </div>
  );
}

export default App;
