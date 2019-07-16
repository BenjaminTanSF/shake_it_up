import { RECEIVE_ALL_DRINKS } from '../actions/drinks_actions';

const drinksReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_ALL_DRINKS:
      return action.drinks;
    default:
      return oldState;
  }
};

export default drinksReducer;