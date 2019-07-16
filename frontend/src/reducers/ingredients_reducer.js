import merge from 'lodash/merge';

import { RECEIVE_ALL_INGREDIENTS, RECEIVE_DRINKS_BY_INGREDIENT } from '../actions/ingredients_actions';

const ingredientsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_INGREDIENTS:
      nextState = action.ingredients;
      return nextState;
    case RECEIVE_DRINKS_BY_INGREDIENT:
      nextState = action.ingredientObjs;
      return nextState;
    default:
      return oldState;
  }
};

export default ingredientsReducer;