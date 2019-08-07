import merge from 'lodash/merge';

import { RECEIVE_ALL_INGREDIENTS, RECEIVE_DRINKS_BY_INGREDIENT } from '../actions/ingredients_actions';

const ingredientsReducer = (oldState = {fullyLoaded: false, array: []}, action) => {
  Object.freeze(oldState);
  let nextState;
  switch (action.type) {
    case RECEIVE_ALL_INGREDIENTS:
      nextState = {array: action.ingredients, fullyLoaded: true};
      return nextState;
    case RECEIVE_DRINKS_BY_INGREDIENT:
      if (!oldState.fullyLoaded) {nextState = {array: action.ingredientObjs, fullyLoaded: false}
      return nextState;}
      return oldState;
    default:
      return oldState;
  }
};

export default ingredientsReducer;