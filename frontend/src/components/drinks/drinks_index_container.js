import { connect } from 'react-redux';
import DrinksIndex from './drinks_index';
import { fetchAlldrinks } from '../../actions/drinks_actions';

const mSTP = state => ({
  drinks: Object.values(state.entities.drinks) // should return an array of drinks
});


const mDTP = dispatch => ({
  fetchAlldrinks: () => dispatch(fetchAlldrinks())
});

export default connect(
  mSTP,
  mDTP
)(DrinksIndex);