import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Discover from './components/discover/discover';
import DrinkIndexContainer from './components/drinks/drink_index_container';
import DrinkShowContainer from './components/drinks/drink_show_container';


function App() {
  return (
    <div className="shake-it-up-container">
      <Link to="/">
        {/* <h1>Shake It Up</h1> */}
      </Link>
      <br/><br/>
        <Switch>
          <Route exact path="/drinks/" component={DrinkIndexContainer}/>
          <Route exact path="/drinks/:drink_id/" component={DrinkShowContainer}/>
          <Route path="/" component={Discover}/>
        </Switch>

    </div>
  );
}

export default App;
