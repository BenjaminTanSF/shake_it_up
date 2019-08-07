import { connect } from 'react-redux';
import IngredientShow from './ingredient_show';
import { fetchDrinksByIngredient} from '../../actions/ingredients_actions';

const mSTP = state => ({
  ingredients: state.entities.ingredients.array,
  ingredientsFullyLoaded: state.entities.ingredients.fullyLoaded,
});

const mDTP = dispatch => ({
  fetchDrinksByIngredient: (name, callback) => dispatch(fetchDrinksByIngredient(
      name, callback
  ))
})

export default connect(
  mSTP,
  mDTP
)(IngredientShow);