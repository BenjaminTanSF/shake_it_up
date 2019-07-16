import React from 'react';
import {Link} from 'react-router-dom';

class DrinksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllDrinks();
  }
  
  render() {
    return (

     <div>
       {Object.values(this.props.drinks).map(drink=>
        <div>
          <img src={drink.strDrinkThumb} width="100px"/>
          <br/>
          {drink.strDrink}
        </div>
        )}
     </div>
    )
  }






}
export default DrinksIndex;