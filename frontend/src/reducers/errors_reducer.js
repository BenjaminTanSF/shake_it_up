import { combineReducers } from 'redux';

import drinksErrorsReducer from './drinks_errors_reducer';
import ingredientsErrorsReducer from './ingredients_errors_reducer';

const errorsReducer = combineReducers({
  drinks: drinksErrorsReducer,
  ingredients: ingredientsErrorsReducer
});

export default errorsReducer;