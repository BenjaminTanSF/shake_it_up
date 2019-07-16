import React from 'react';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import BYOC from './components/byoc/byoc';
import Header from './components/header';
import Menu from './components/menu';
import Discover from './components/discover/discover';
import DrinksIndexContainer from './components/drinks/drinks_index_container';
// import { DrinksShowContainer } from './components/drinks/drinks_show_container';

import IngredientsIndexContainer from './components/ingredients/ingredients_index_container';
import IngredientShowContainer from './components/ingredients/ingredient_show_container';

function App() {
  return (
    <div className="shake-it-up-container">
      <Header />
      {/* <Link to="/"> */}
      {/* <h1>Shake It Up</h1> */}
      {/* </Link> */}
      {/* <br /><br /> */}
      {/* <Discover/> */}

      <Switch>
        <Route exact path="/ingredients" component={IngredientsIndexContainer} />
        <Route exact path="/ingredients/:ingredient_name" component={IngredientShowContainer} />
        <Route exact path="/drinks" component={DrinksIndexContainer} />
        <Route exact path="/byoc" component={ BYOC } />
        <Route path="/" component={Discover} />
        {/* <Route exact path="/drinks/:drink_id" component={DrinksShowContainer}/> */}
      </Switch>
    < Menu / >
    </div>
  );
}

export default App;
