import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// testing
import { getDrinks, getDrinkDetails, getIngredientPics, getIngredients, getDrinksByIngredient } from './util/drinks_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUserId: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.clearErrors = clearErrors;

  ReactDOM.render(<h1>Shake It Up!</h1>, root);
})