import {
  RECEIVE_ALL_DRINKS,
  RECEIVE_SINGLE_DRINK,
  RECEIVE_DRINKS_ERRORS,
  START_LOADING_ALL_DRINKS,
  START_LOADING_SINGLE_DRINK,
  CLEAR_DRINKS_ERRORS
} from '../actions/drinks_actions';
import {
  RECEIVE_ALL_INGREDIENTS,
  RECEIVE_DRINKS_BY_INGREDIENT,
  START_LOADING_DRINKS_BY_INGREDIENT,
  RECEIVE_INGREDIENTS_ERRORS,
  START_LOADING_ALL_INGREDIENTS,
  CLEAR_INGREDIENTS_ERRORS
} from '../actions/ingredients_actions';

const initialState = {
  loading: false,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_DRINKS:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_SINGLE_DRINK:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_DRINKS_ERRORS:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_ALL_INGREDIENTS:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_DRINKS_BY_INGREDIENT:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_INGREDIENTS_ERRORS:
      return Object.assign({}, state, { loading: false });
    case CLEAR_DRINKS_ERRORS:
      return Object.assign({}, state, { loading: false });
    case CLEAR_INGREDIENTS_ERRORS:
      return Object.assign({}, state, { loading: false });
    case START_LOADING_SINGLE_DRINK:
      return Object.assign({}, state, { loading: true });
    case START_LOADING_ALL_DRINKS:
      return Object.assign({}, state, { loading: true });
    case START_LOADING_DRINKS_BY_INGREDIENT:
      return Object.assign({}, state, { loading: true });
    case START_LOADING_ALL_INGREDIENTS:
      return Object.assign({}, state, { loading: true });
    default:
      return state;
  }
};

export default loadingReducer;
