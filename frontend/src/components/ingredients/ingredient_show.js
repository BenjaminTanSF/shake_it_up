import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/ingredients/ingredient_show.scss';


const IngredientShow = props => {
  const { ingredient } = props.location.state;

  window.scrollTo(0, 0);

  return (
    <div className="ingred-show-container">
      <h1>{ingredient.name}</h1>
      <img src={ingredient.strIngredientThumb} alt={ingredient.name} />
      {ingredient.description ? <p>{ingredient.description}</p> : null}
      <br />
      <div className="ingred-show-desc">Drinks this can make...</div>
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