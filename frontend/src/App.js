import React from 'react';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import BYOC from './components/byoc/byoc';
import Header from './components/header';
import Menu from './components/menu';
import Discover from './components/discover/discover';
import DrinksIndexContainer from './components/drinks/drink_index_container';
import DrinkShowContainer from './components/drinks/drink_show_container';
import IngredientsIndexContainer from './components/ingredients/ingredient_index_container';
import IngredientShow from './components/ingredients/ingredient_show';

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
        <Route exact path="/ingredients/:ingredient_name" component={IngredientShow} />
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
