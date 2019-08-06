import { connect } from 'react-redux';
import BYOC from './byoc';
import { fetchAllIngredients } from '../../actions/ingredients_actions';

const mSTP = state => ({
  ingredients: state.entities.ingredients,
  loading: state.ui.loading.loading
});

const mDTP = dispatch => ({
  fetchAllIngredients: () => dispatch(fetchAllIngredients())
})

export default connect(
  mSTP,
  mDTP
)(BYOC);