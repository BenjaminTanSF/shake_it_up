import merge from 'lodash/merge';

import { RECEIVE_ALL_INGREDIENTS, RECEIVE_ALL_INGREDIENT_PICS, RECEIVE_DRINKS_BY_INGREDIENT } from '../actions/ingredients_actions';

const ingredientsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_ACCOUNTS:
      nextState = action.ingredients;
      return nextState;
    case RECEIVE_CURRENT_ACCOUNT:
      // let newState = Object.assign({}, oldState, {[action.currentAccount.id]: action.currentAccount});
      // return newState;
      nextState = action.currentAccount;
      return nextState;
    case DESTROY_CURRENT_ACCOUNT:
      delete nextState[action.currentAccount.id];
      return nextState;
    default:
      return oldState;
  }
};

export default ingredientsReducer;