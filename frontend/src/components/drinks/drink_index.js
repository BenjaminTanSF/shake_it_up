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
        searchStr: e.currentTarget.value,
        shownDrinks: this.state.drinks.filter(drink => (
          drink.strDrink.toLowerCase().includes(e.currentTarget.value.toLowerCase())
        ))
      })
    }
  }

  componentDidMount() {
    this.props.fetchAllDrinks(() => (this.setState({
      drinks: this.props.drinks,
      shownDrinks: this.props.drinks,
      searchStr: ""
    })));
  }

  render() {
    return (

      // Search Bar 
      <div className="drinks-index-container">
        <div className="search-container">
          <label>
            <input type="text"
              value={this.state.searchStr}
              onChange={this.updateSearch()}
              className="search"
              placeholder="Search for a cocktail" />
            {/* <span id = "emoji"> 🔍🔎 </span> */}
          </label>
        </div>
        <div id="drink-index-h1-container">
          <h1>Cocktails</h1>
        </div>
        

        <div className="drink-tile-container">
        {Object.values(this.state.shownDrinks).slice(0,20).map(drink =>
          <div className="drink-index-tile" key={drink.idDrink}>
            <Link to={`/drinks/${drink.idDrink}`}>
              <img alt={drink.strDrink} className="drink-idx-img" src={drink.strDrinkThumb} width="70%" />
              <span className="drink-index-name">{drink.strDrink}</span>
            </Link>
            <hr></hr>
          </div>
        )}
        
        </div>
      </div>
    )
  }


}
export default DrinksIndex;

// TODO: Styling for Drinks Index results
// TODO: Styling / Interaction Design for Search Bar
// TODO: Add drink ingredients below drink title
