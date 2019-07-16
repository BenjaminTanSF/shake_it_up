import React from 'react';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Discover from './components/discover/discover';
import DrinksIndexContainer from './components/drinks/drinks_index_container';
// import { DrinksShowContainer } from './components/drinks/drinks_show_container';


function App() {
  return (
    <div className="shake-it-up-container">
      {/* <Link to="/"> */}
        <h1>Shake It Up</h1>
      {/* </Link> */}
      <br/><br/>
      {/* <Discover/> */}

      <BrowserRouter>
        <Switch>
          <Route exact path="/drinks/" component={DrinksIndexContainer}/>
          <Route path="/" component={Discover}/>
          {/* <Route exact path="/drinks/:drink_id" component={DrinksShowContainer}/> */}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
