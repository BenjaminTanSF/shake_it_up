import axios from 'axios';

export const getDrinks = () => {
  return axios.get('/api/drinks')
};

export const getDrinkDetails = id => {
  return axios.get(`/api/drinks/${id}`)
};

export const getIngredientPics = () => {
  return axios.get('/api/ingredientPics')
};

// This ajax call returns a giant obj so avoid using it
// Instead, build new api routes on the backend to fetch drinks by a single ingredient
export const getIngredients = () => {
  return axios.get('/api/ingredients')
};

export const searchIngredientByName = name => {
  return axios.get(`/api/ingredients/${name}`)
};

export const searchDrinkByName  = drink_name => {
  return axios.get(`/api/drink_search/${drink_name}`);
}