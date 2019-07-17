import React from 'react';
import { Link } from 'react-router-dom';

// styles
import '../../styles/drinks/drinks_index.scss';

class DrinksIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drinks: props.drinks,
      shownDrinks: props.drinks,
      searchStr: ""
    }
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch() {
    return e => {
      this.setState({
        searchStr: e.target.value,
        shownDrinks: this.state.drinks.filter(drink => (
          drink.strDrink.includes(this.state.searchStr)
        ))
      })
    }
  }

  componentDidMount() {
    this.props.fetchAllDrinks();
  }

  render() {
    return (

      <div className="drinks-index-container">

        <h1>Drinks</h1>

        {Object.values(this.props.drinks).map(drink =>
          <div className="drink-index-tile" key={drink.idDrink}>
            <Link to={`/drinks/${drink.idDrink}`}>
              <img alt={drink.strDrink} className="drink-idx-img" src={drink.strDrinkThumb} width="70%" />
              <br />
              <div className="drink-index-name">
                {drink.strDrink}
              </div>
            </Link>
          </div>
        )}
      </div>
    )
  }


}
export default DrinksIndex;