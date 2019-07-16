import { connect } from 'react-redux';
import DrinksIndex from './drinks_index';
import { fetchAllDrinks } from '../../actions/drinks_actions';

const mSTP = state => ({
  drinks: Object.values(state.entities.drinks) // should return an array of drinks
});


const mDTP = dispatch => ({
  fetchAllDrinks: () => dispatch(fetchAllDrinks())
});

export default connect(
  mSTP,
  mDTP
)(DrinksIndex);

