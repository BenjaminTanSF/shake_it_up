import * as APIUtil from '../util/drinks_api_util';

export const RECEIVE_ALL_INGREDIENTS = "RECEIVE_ALL_INGREDIENTS";
export const RECEIVE_ALL_INGREDIENT_PICS = "RECEIVE_ALL_INGREDIENT_PICS";
export const RECEIVE_DRINKS_BY_INGREDIENT = "RECEIVE_DRINKS_BY_INGREDIENT";
export const START_LOADING_DRINKS_BY_INGREDIENT = "START_LOADING_DRINKS_BY_INGREDIENT";
export const START_LOADING_ALL_INGREDIENTS = "START_LOADING_ALL_INGREDIENTS";
export const START_LOADING_ALL_INGREDIENT_PICS = "START_LOADING_ALL_INGREDIENT_PICS";
export const RECEIVE_INGREDIENTS_ERRORS = 'RECEIVE_INGREDIENTS_ERRORS';
export const CLEAR_INGREDIENTS_ERRORS = 'CLEAR_INGREDIENTS_ERRORS';

export const startLoadingAllIngredients = () => ({
  type: START_LOADING_ALL_INGREDIENTS
});

export const startLoadingAllIngredientPics = () => ({
  type: START_LOADING_ALL_INGREDIENT_PICS
});

export const startLoadingDrinksByIngredient = () => ({
  type: START_LOADING_DRINKS_BY_INGREDIENT
});

export const receiveAllIngredients = ingredients => ({
  type: RECEIVE_ALL_INGREDIENTS,
  ingredients
});

export const receiveAllIngredientPics = ingredients => ({
  type: RECEIVE_ALL_INGREDIENT_PICS,
  ingredients
});

export const receiveDrinksByIngredient = ingredientObjs => ({
  type: RECEIVE_DRINKS_BY_INGREDIENT,
  ingredientObjs
});

export const fetchDrinksByIngredient = IngredientName => dispatch => {
  dispatch(startLoadingDrinksByIngredient());
  return APIUtil.searchIngredientByName(IngredientName).then(
    ingredientObjs => { dispatch(receiveDrinksByIngredient(ingredientObjs.data)) },
    err => dispatch(receiveIngredientsErrors(err))
  )
};

export const fetchAllIngredients = () => dispatch => {
  dispatch(startLoadingAllIngredients());
  return APIUtil.getIngredients().then(
    ingredients => { dispatch(receiveAllIngredients(ingredients.data)) },
    err => { dispatch(receiveIngredientsErrors(err)) }
  )
};

export const fetchAllIngredientPics = () => dispatch => {
  dispatch(startLoadingAllIngredientPics());
  return APIUtil.getIngredientPics().then(
    ingredients => { dispatch(receiveAllIngredientPics(ingredients.data)) },
    err => { dispatch(receiveIngredientsErrors(err)) }
  )
};

export const receiveIngredientsErrors = errors => ({
  type: RECEIVE_INGREDIENTS_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_INGREDIENTS_ERRORS
});