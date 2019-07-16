import React from 'react';
import {Link} from 'react-router-dom';

class DrinksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.fetchAllDrinks();
  }
  
  render () {
    // debugger
    return (
      <div>
        <h1>Drinks Index</h1>
        <div>
          <div>
            {this.props.drinks.map(drink => {
              <div>
                <img src={drink.DrinkThumb}/>
                {drink.strDrink}
              </div> */}
            {/* })}
            
          </div>
        </div>
      </div>
    )
  }
}

export default DrinksIndex;