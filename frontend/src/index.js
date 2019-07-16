import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import './index.css';
import * as serviceWorker from './serviceWorker';

//testing
import configureStore from './store/store';
import { fetchAllDrinks, fetchSingleDrink } from './actions/drinks_actions';
import { fetchAllIngredients, fetchDrinksByIngredient } from './actions/ingredients_actions';


const store = configureStore();

//testing
window.getState = store.getState;
window.dispatch = store.dispatch;
window.fetchAllDrinks = fetchAllDrinks;
window.fetchSingleDrink = fetchSingleDrink;

window.fetchAllIngredients = fetchAllIngredients;
window.fetchDrinksByIngredient = fetchDrinksByIngredient;


ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
