import { connect } from 'react-redux';
import DrinkIndex from './drink_index';
import { fetchAllDrinks } from '../../actions/drinks_actions';

const mSTP = state => {
  return ({
    drinks: state.entities.drinks.array,
    drinksFullyLoaded: state.entities.drinks.fullyLoaded,
    loading: state.ui.loading.loading
  });
};


const mDTP = dispatch => ({
  fetchAllDrinks: (callback) => dispatch(fetchAllDrinks(callback))
});

export default connect(
  mSTP,
  mDTP
)(DrinkIndex);

