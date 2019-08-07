import { connect } from 'react-redux';
import DrinkShow from './drink_show';
import { fetchSingleDrink } from '../../actions/drinks_actions';

const mSTP = (state, ownProps) => {
  let drinkId = ownProps.match.params.drink_id;
  let drinks = state.entities.drinks.array || [];
  let drink = drinks.find(
    dr => dr.idDrink === drinkId
  );
  return ({
    // drink: state.entities.drinks[drinkId],
    drinks,
    loading: state.ui.loading.loading
  });
};

const mDTP = dispatch => ({
  fetchSingleDrink: id => dispatch(fetchSingleDrink(id))
});

export default connect(
  mSTP,
  mDTP
)(DrinkShow);

