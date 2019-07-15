import * as APIUtil from '../util/drinks_api_util';

export const RECEIVE_ALL_DRINKS = "RECEIVE_ALL_DRINKS";
export const RECEIVE_SINGLE_DRINK = "RECEIVE_SINGLE_DRINK";
export const START_LOADING_ALL_DRINKS = "START_LOADING_ALL_DRINKS";
export const START_LOADING_SINGLE_DRINK = "START_LOADING_SINGLE_DRINK";
export const RECEIVE_DRINKS_ERRORS = 'RECEIVE_DRINKS_ERRORS';
export const CLEAR_DRINKS_ERRORS = 'CLEAR_DRINKS_ERRORS';

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

export const fetchAllDrinks = () => dispatch => {
  dispatch(startLoadingAllDrinks());
  return APIUtil.getDrinks().then(
    drinks => { dispatch(receiveAllDrinks(drinks)) },
    err => { dispatch(receiveDrinksErrors(err)) }
  )
};

export const fetchSingleDrink = id => dispatch => {
  dispatch(startLoadingSingleDrink());
  return APIUtil.getDrinkDetails(id).then(
    drink => { dispatch(receiveSingleDrink(drink)) },
    err => { dispatch(receiveDrinksErrors(err)) }
  )
};

export const receiveDrinksErrors = errors => ({
  type: RECEIVE_DRINKS_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_DRINKS_ERRORS
});