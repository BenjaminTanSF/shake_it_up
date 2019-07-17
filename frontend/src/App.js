import React from 'react';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import BYOCContainer from './components/byoc/byoc_container';
import BYOCResults from './components/byoc/byoc-results';
import Header from './components/header';
import Menu from './components/menu';
import Discover from './components/discover/discover';
import DrinkIndexContainer from './components/drinks/drink_index_container';
import DrinkShowContainer from './components/drinks/drink_show_container';

import IngredientIndexContainer from './components/ingredients/ingredient_index_container';
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
        <Route exact path="/ingredients" component={IngredientIndexContainer} />
        <Route exact path="/ingredients/:ingredient_name" component={IngredientShow} />
        <Route exact path="/drinks" component={DrinkIndexContainer} />
        <Route exact path="/byoc" component={BYOCContainer} />
        <Route exact path="/byoc/:spirit_name" component={BYOCResults} />
        <Route path="/" component={Discover} />
        {/* <Route exact path="/drinks/:drink_id" component={DrinkShowContainer}/> */}
      </Switch>
      < Menu />
    </div>
  );
}

export default App;
