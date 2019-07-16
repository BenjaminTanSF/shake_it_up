import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Discover from './components/discover/discover';
import DrinkIndexContainer from './components/drinks/drink_index_container';
import DrinkShowContainer from './components/drinks/drink_show_container';

import IngredientIndexContainer from './components/ingredients/ingredient_index_container';
import IngredientShow from './components/ingredients/ingredient_show';

function App() {
  return (
    <div className="shake-it-up-container">
      {/* <Link to="/"> */}
      {/* <h1>Shake It Up</h1> */}
      {/* </Link> */}
      {/* <br /><br /> */}
      {/* <Discover/> */}

      <Switch>
        <Route exact path="/ingredients" component={IngredientIndexContainer} />
        <Route exact path="/ingredients/:ingredient_name" component={IngredientShow} />
        <Route exact path="/drinks" component={DrinkIndexContainer} />
        <Route path="/" component={Discover} />
        {/* <Route exact path="/drinks/:drink_id" component={DrinkShowContainer}/> */}
      </Switch>

    </div>
  );
}

export default App;
