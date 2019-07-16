import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';
import errorsReducer from './errors_reducer';
import allDrinksReducer from './all_drinks_reducer';
import allIngredientsReducer from './all_ingredients_reducer';

const rootReducer = combineReducers({
  allDrinks: allDrinksReducer,
  allIngredients: allIngredientsReducer,
  entities: entitiesReducer,
  ui: uiReducer,
  errors: errorsReducer,
});

export default rootReducer;