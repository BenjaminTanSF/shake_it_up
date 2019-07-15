import { RECEIVE_DRINKS_ERRORS, CLEAR_DRINKS_ERRORS } from '../actions/drinks_actions';

const drinksErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DRINKS_ERRORS:
      return action.errors;
    case CLEAR_DRINKS_ERRORS:
      return [];
    default:
      return state;
  }
}

export default drinksErrorsReducer;