import merge from 'lodash/merge';

import { RECEIVE_ALL_DRINKS, RECEIVE_SINGLE_DRINK } from '../actions/drinks_actions';

const drinksReducer = (oldState = {fullyLoaded: false, array: []}, action) => {
  Object.freeze(oldState);
  let nextState;
  switch (action.type) {
    case RECEIVE_ALL_DRINKS:
      nextState = {array: action.drinks, fullyLoaded: true};
      return nextState;
    case RECEIVE_SINGLE_DRINK:
      if(!oldState.fullyLoaded){
        nextState = {fullyLoaded: false, array: action.drink}
      return nextState;}
      
      return oldState;
    default:
      return oldState;
  }
};

export default drinksReducer;