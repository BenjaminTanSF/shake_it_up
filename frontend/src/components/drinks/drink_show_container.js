import { connect } from 'react-redux';
import DrinkShow from './drink_show';
import { fetchSingleDrink } from '../../actions/drinks_actions';

const mSTP = (ownProps, state) => {
  let drinkId = ownProps.match.params.id;
  return ({
    drink: state.entities.drinks[drinkId]
  });
};

const mDTP = dispatch => ({
  fetchSingleDrink: id => dispatch(fetchSingleDrink(id))
});

export default connect(
  mSTP,
  mDTP
)(DrinkShow);