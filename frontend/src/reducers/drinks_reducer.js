import merge from 'lodash/merge';

import { RECEIVE_ALL_DRINKS, RECEIVE_SINGLE_DRINK } from '../actions/drinks_actions';

const drinksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_DRINKS:
      nextState = action.drinks;
      return nextState;
    case RECEIVE_SINGLE_DRINK:
      nextState = action.drink;
      return nextState;
    default:
      return oldState;
  }
};

export default drinksReducer;