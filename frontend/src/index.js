import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



// import configureStore from './store/store';

// testing
import { getDrinks, getDrinkDetails, getIngredientPics, getIngredients, getDrinksByIngredient } from './util/drinks_api_util';



// const store = configureStore();

//testing
// window.getState = store.getState;
// window.dispatch = store.dispatch;
window.getDrinks = getDrinks;
window.getDrinkDetails = getDrinkDetails;
window.getIngredientPics = getIngredientPics;
window.getIngredients = getIngredients;
window.getDrinksByIngredient = getDrinksByIngredient;

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
