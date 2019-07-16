import { connect } from 'react-redux';
import IngredientShow from './ingredient_show';
import { fetchDrinksByIngredient } from '../../actions/ingredients_actions';

const mSTP = state => ({
  ingredients: state.entities.ingredients,
  loading: state.ui.loading.loading
});

const mDTP = dispatch => ({
  fetchDrinksByIngredient: (name) => dispatch(fetchDrinksByIngredient(name))
})

export default connect(
  mSTP,
  mDTP
)(IngredientShow);