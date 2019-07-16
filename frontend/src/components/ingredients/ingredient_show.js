import React from 'react';
import { Link } from 'react-router-dom';

const IngredientShow = props => (
  <div>
    <h6>props.ingredient.name</h6>
    <img src={props.ingredient.strIngredientThumb} alt={props.ingredient.name} />
    if (props.ingredient.description) {
      <p>{props.ingredient.description}</p>
    }
    <br />
    {props.drinks.map(drink => <Link to={`/drinks/${drink.idDrink}`}>{drink.strDrink}</Link>)}
  </div>
);

export default IngredientShow;