import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

import Splash from './components/splash/splash';

function App() {
  return (
    <div className="shake-it-up-container">
      <h1>Shake It Up</h1>
      
      {/* <BuildADrink/> */}
      <br/><br/>
      {/* <FeaturedDrinks/> */}
      
      <Splash/>

      {/* <MenuBar/>  */}
    </div>
  );
}

export default App;
