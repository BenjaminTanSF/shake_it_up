import { combineReducers } from 'redux';

import drinksReducer from './drinks_reducer';
import ingredientsReducer from './ingredients_reducer';

const entitiesReducer = combineReducers({
  drinks: drinksReducer,
  ingredients: ingredientsReducer,
});

export default entitiesReducer;