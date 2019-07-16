import React from 'react';
import IngredientShow from './ingredient_show';
import { Link } from 'react-router-dom';

class IngredientsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllIngredients();
  }

  render() {
    const { ingredients, loading } = this.props;
    if (loading) { return <h1>LOADING</h1>; }
    else {
      return (
        <div>
          <h1>Ingredients Index</h1>
          <ul>
            {ingredients.map(ingredient => (
              <div key={ingredient._id}>
                <Link to={`/ingredients/${ingredient.name}`}>
                  <img src={ingredient.strIngredientThumb} alt={ingredient.name} />
                  {ingredient.name}
                </Link>
                <br />
              </div>
            ))}
          </ul>
        </div>
      )
    }
  }
}

export default IngredientsIndex;