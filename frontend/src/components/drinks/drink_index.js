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

     <div className="drinks-index-container">

       <h1>All Drinks</h1>
       
       {Object.values(this.props.drinks).map(drink=>
        <div className="drink-index-tile" key={drink.idDrink}>
          <Link to={`/drinks/${drink.idDrink}`}>
            <img alt={drink.strDrink} className="drink-idx-img" alt={drink.strDrink} src={drink.strDrinkThumb} width="70%"/>
            <br/>
            <div className="drinks-index-name">
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