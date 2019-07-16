import React from 'react';
import {Link} from 'react-router-dom';

class DrinksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllDrinks();
  }
  
  render () {
    return (
      <div>
        <h1>Drinks Index</h1>
        <div>
          <div>
            {/* {this.props.drinks.map(drink => {
              <img src={drink.DrinkThumb}/>
              // <h2>{drink.strDrink}</h2>
            })} */}
            
          </div>
        </div>
      </div>
    )
  }
}

export default DrinksIndex;