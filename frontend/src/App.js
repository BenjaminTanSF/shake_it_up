import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

import Discover from './components/discover/discover';

function App() {
  return (
    <div className="shake-it-up-container">
      <h1>Shake It Up</h1>
      
      {/* <BuildADrink/> */}
      <br/><br/>
      {/* <FeaturedDrinks/> */}
      
      <Discover/>

      {/* <MenuBar/>  */}
    </div>
  );
}

export default App;
