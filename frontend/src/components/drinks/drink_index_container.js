import { connect } from 'react-redux';
import DrinksIndex from './drink_index';
import { fetchAllDrinks } from '../../actions/drinks_actions';

const mSTP = state => {
  return ({
    drinks: state.entities.drinks,
    loading: state.ui.loading.loading
  });
};


const mDTP = dispatch => ({
  fetchAllDrinks: () => dispatch(fetchAllDrinks())
});

export default connect(
  mSTP,
  mDTP
)(DrinksIndex);

