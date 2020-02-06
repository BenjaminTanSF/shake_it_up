import * as APIUtil from '../util/drinks_api_util';

export const RECEIVE_ALL_DRINKS = "RECEIVE_ALL_DRINKS";
export const RECEIVE_SINGLE_DRINK = "RECEIVE_SINGLE_DRINK";
export const START_LOADING_ALL_DRINKS = "START_LOADING_ALL_DRINKS";
export const START_LOADING_SINGLE_DRINK = "START_LOADING_SINGLE_DRINK";
export const RECEIVE_DRINKS_ERRORS = 'RECEIVE_DRINKS_ERRORS';
export const CLEAR_DRINKS_ERRORS = 'CLEAR_DRINKS_ERRORS';
export const START_LOADING_DRINKS_BY_SEARCH = 'START_LOADING_DRINKS_BY_SEARCH';

export const startLoadingDrinksBySearch = () => ({
  type: START_LOADING_DRINKS_BY_SEARCH
});

export const startLoadingAllDrinks = () => ({
  type: START_LOADING_ALL_DRINKS
});

export const startLoadingSingleDrink = () => ({
  type: START_LOADING_SINGLE_DRINK
});

export const receiveAllDrinks = drinks => ({
  type: RECEIVE_ALL_DRINKS,
  drinks
});

export const receiveSingleDrink = drink => ({
  type: RECEIVE_SINGLE_DRINK,
  drink
});

export const fetchAllDrinks = (callback) => (dispatch, getState) => {
  if (getState().entities.drinks.fullyLoaded) {
    if (callback) callback();
    return;
  }
  dispatch(startLoadingAllDrinks());
  return APIUtil.getDrinks().then(
    drinks => {
      dispatch(receiveAllDrinks(drinks.data));
      if (callback) {
        callback();
      }
    },
    err => { dispatch(receiveDrinksErrors(err)) }
  )
};

export const fetchSingleDrink = (id, callback) => (dispatch, getState) => {
  if (getState().entities.drinks.fullyLoaded) {
    if (callback) callback();
    return;
  }
  dispatch(startLoadingSingleDrink());
  return APIUtil.getDrinkDetails(id).then(
    drink => {
      dispatch(receiveSingleDrink(drink.data));
      if (callback) { callback() }
    },
    err => { dispatch(receiveDrinksErrors(err)) }
  )
};

export const fetchDrinksBySearch = searchTerm => dispatch => {
  dispatch(startLoadingDrinksBySearch());
  return APIUtil.searchDrinkByName(searchTerm).then(
    drinks => { dispatch(receiveAllDrinks(drinks.data)) },
    err => dispatch(receiveDrinksErrors(err))
  )
};

export const receiveDrinksErrors = errors => ({
  type: RECEIVE_DRINKS_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_DRINKS_ERRORS
});