import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

import Splash from './components/splash/splash';

function App() {
  return (
    <div className="shake-it-up-container">
      <h1>Shake It Up</h1>
      
      Giant Shaker Button
      <br/><br/>
      Featured Drinks
      
      <Splash/>
    </div>
  );
}

export default App;
