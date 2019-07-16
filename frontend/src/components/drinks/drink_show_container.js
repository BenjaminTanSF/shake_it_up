import { connect } from 'react-redux';
import DrinkShow from './drink_show';
import { fetchSingleDrink } from '../../actions/drinks_actions';

const mSTP = (state, ownProps) => {
  let drinkId = ownProps.match.params.drink_id;
  return ({
    drink: state.entities.drinks[drinkId]
  });
};

const mDTP = dispatch => ({
  fetchSingleDrink: (id) => dispatch(fetchSingleDrink(id))
});

export default connect(
  mSTP,
  mDTP
)(DrinkShow);