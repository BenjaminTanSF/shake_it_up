import React from 'react';
import {Link} from 'react-router-dom';

// styles
import '../../styles/drinks/drinks_index.scss';

class DrinksIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllDrinks();
  }
  
  render() {
    return (


     // Search Bar 
     <div className="drinks-index-container">
       <div className="search-container">
          <label>
          <input type="text"
              // value=""
              // onChange=""
              className="search"
              placeholder="Search for a cocktail"/>
              {/* <span id = "emoji"> 🔍🔎 </span> */}
          </label>
       </div>
       <h1>Drinks</h1>
       
       {Object.values(this.props.drinks).map(drink=>
        <div className="drink-index-tile" key={drink.idDrink}>
          <Link to={`/drinks/${drink.idDrink}`}>
            <img alt={drink.strDrink} className="drink-idx-img" src={drink.strDrinkThumb} width="70%"/>
            <br/>
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