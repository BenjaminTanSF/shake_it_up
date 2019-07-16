import React from 'react';
import { Link } from 'react-router-dom';

const IngredientShow = props => {
  const { ingredient } = props.location.state;

  return (
    <div>
      <h3>{ingredient.name}</h3>
      <img src={ingredient.strIngredientThumb} alt={ingredient.name} />
      {ingredient.description ? <p>{ingredient.description}</p> : null}
      <br />
      {ingredient.drinks.map(drink => (
        <div key={drink._id}>
          <Link to={{
            pathname: `/drinks/${drink.idDrink}`,
            state: { drink: drink }
          }}
          >{drink.strDrink}</Link>
          <br />
        </div>
      ))}
    </div>
  )
};

export default IngredientShow;