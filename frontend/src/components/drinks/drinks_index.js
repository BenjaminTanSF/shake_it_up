import React from 'react';
import {Link} from 'react-router-dom';

class DrinksIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllDrinks();
  }
  
  render() {
    return (

     <div>
       {Object.values(this.props.drinks).map(drink=>
        <div key={drink.idDrink}>
          <Link to={`/drinks/${drink.idDrink}`}>
            <img alt={drink.strDrink} src={drink.strDrinkThumb} width="100px"/>
            <br/>
            {drink.strDrink}
          </Link>
        </div>
        )}
     </div>
    )
  }






}
export default DrinksIndex;