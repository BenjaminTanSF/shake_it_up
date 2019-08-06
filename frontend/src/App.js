import React from 'react';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import BYOCContainer from './components/byoc/byoc_container';
import BYOCResultsContainer from './components/byoc/byoc-results-container';
import Header from './components/header';
import Menu from './components/menu';
import Discover from './components/discover/discover';
import DrinkIndexContainer from './components/drinks/drink_index_container';
import DrinkShowContainer from './components/drinks/drink_show_container';
import IngredientIndexContainer from './components/ingredients/ingredient_index_container';
import IngredientShowContainer from './components/ingredients/ingredient_show_container';


function App() {
  return (
    <div className="shake-it-up-container">
      <Header />
      
      <Switch>
        <Route exact path="/ingredients" component={IngredientIndexContainer} />
        <Route exact path="/ingredients/:ingredient_name" component={IngredientShowContainer} />
        <Route exact path="/drinks/:drink_id" component={DrinkShowContainer} />
        <Route exact path="/drinks" component={DrinkIndexContainer} />
        <Route exact path="/drinks/:drink_id" component={DrinkShowContainer} />
        <Route exact path="/byoc" component={BYOCContainer} />
        <Route exact path="/byoc/:spirit_name" component={BYOCResultsContainer} />
        <Route path="/" component={Discover} />
      </Switch>

      < Menu />
    </div>
  );
}

export default App;
