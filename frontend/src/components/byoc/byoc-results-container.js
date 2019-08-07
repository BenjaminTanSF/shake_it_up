import { connect } from 'react-redux';
import BYOCR from './byoc-results';
import { fetchDrinksByIngredient } from '../../actions/ingredients_actions';

const mSTP = state => ({
  ingredients: state.entities.ingredients.array,
  ingredientsFullyLoaded: state.entities.ingredients.fullyLoaded,
});

const mDTP = dispatch => ({
  fetchDrinksByIngredient: (ing, callback) => 
  dispatch(fetchDrinksByIngredient(ing, callback))
})

export default connect(
  mSTP,
  mDTP
)(BYOCR);