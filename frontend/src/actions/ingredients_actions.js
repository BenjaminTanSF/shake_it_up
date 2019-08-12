import * as APIUtil from '../util/drinks_api_util';

export const RECEIVE_ALL_INGREDIENTS = "RECEIVE_ALL_INGREDIENTS";
export const RECEIVE_DRINKS_BY_INGREDIENT = "RECEIVE_DRINKS_BY_INGREDIENT";
export const START_LOADING_DRINKS_BY_INGREDIENT = "START_LOADING_DRINKS_BY_INGREDIENT";
export const START_LOADING_ALL_INGREDIENTS = "START_LOADING_ALL_INGREDIENTS";
export const RECEIVE_INGREDIENTS_ERRORS = 'RECEIVE_INGREDIENTS_ERRORS';
export const CLEAR_INGREDIENTS_ERRORS = 'CLEAR_INGREDIENTS_ERRORS';

export const startLoadingAllIngredients = () => ({
  type: START_LOADING_ALL_INGREDIENTS
});

export const startLoadingDrinksByIngredient = () => ({
  type: START_LOADING_DRINKS_BY_INGREDIENT
});

export const receiveAllIngredients = ingredients => ({
  type: RECEIVE_ALL_INGREDIENTS,
  ingredients
});

export const receiveDrinksByIngredient = ingredientObjs => ({
  type: RECEIVE_DRINKS_BY_INGREDIENT,
  ingredientObjs
});

//Our fetch thunk actions check the redux state, so that they
//only make the http request if the data is not already fully loaded.
//They also accept an optional callback to be 
//executed when the data is fetched.
 
export const fetchDrinksByIngredient = (IngredientName, callback) => (dispatch, getState) => {
  if (getState().entities.ingredients.fullyLoaded) {
    if(callback) callback();
    return;
  }
    dispatch(startLoadingDrinksByIngredient());
  return APIUtil.searchIngredientByName(IngredientName).then(
    ingredientObjs => { dispatch(receiveDrinksByIngredient(ingredientObjs.data));
    if(callback) {callback();} },
    err => dispatch(receiveIngredientsErrors(err))
  )
};

export const fetchAllIngredients = (callback) => (dispatch, getState) => {
  if (getState().entities.ingredients.fullyLoaded) {
    if(callback) callback();
    return;
  }
  dispatch(startLoadingAllIngredients());
  return APIUtil.getIngredients().then(
    ingredients => {
      dispatch(receiveAllIngredients(ingredients.data));
      if (callback) {
        callback();
      }
    },
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