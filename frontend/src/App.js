import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Discover from './components/discover/discover';
// import { DrinksIndexContainer } from './components/drinks/drinks_index_container';
// import { DrinksShowContainer } from './components/drinks/drinks_show_container';


function App() {
  return (
    <div className="shake-it-up-container">
      <h1>Shake It Up</h1>
      <br/><br/>
      <Discover/>

      <Switch>
        <Route path="/" component={Discover}/>
        {/* <Route exact path="/drinks" component={DrinksIndexContainer}/> */}
        {/* <Route exact path="/drinks/:drink_id" component={DrinksShowContainer}/> */}
      </Switch>

    </div>
  );
}

export default App;
