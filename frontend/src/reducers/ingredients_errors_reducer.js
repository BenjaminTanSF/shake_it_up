import { RECEIVE_INGREDIENTS_ERRORS, CLEAR_INGREDIENTS_ERRORS } from '../actions/ingredients_actions';

const ingredientsErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_INGREDIENTS_ERRORS:
      return action.errors;
    case CLEAR_INGREDIENTS_ERRORS:
      return [];
    default:
      return state;
  }
}

export default ingredientsErrorsReducer;