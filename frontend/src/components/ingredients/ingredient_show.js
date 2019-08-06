import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';

import '../../styles/ingredients/ingredient_show.scss';


class  IngredientShow extends React.Component  {

  constructor(props){
    super(props);
  this.state = {ingredientLoaded: false, ingredient: {
    name: props.match.params["ingredient_name"], drinks: []}};
  if (props.location.state){
    this.setState({ingredientLoaded: true,
      ingredient: props.location.state});
  }

  window.scrollTo(0, 0);
  }

  componentDidMount(){
    let name = this.state.ingredient.name;
    if (!this.state.ingredientLoaded){
      this.props.fetchDrinksByIngredient(
        name,
         () => {this.setState({ingredient: 
          this.props.ingredients.find(pojo => 
            (pojo.name === name))})}
      );
    }
  }

  render (){
    let ingredient = this.state.ingredient;

    let fileName = undefined;
    
    if (ingredient.strIngredientThumb) fileName = ingredient.strIngredientThumb.slice(82, (ingredient.strIngredientThumb.length - 9));

    const CapIngredName = (str) => {
      let result = [];
      let words = str.split(" ");
      for (let i=0; i< words.length; i++) {
        let word = words[i];
        result.push(word.slice(0,1).toUpperCase() + word.slice(1));
      }
      return result.join(" ");
    };

    return (
      <div className="ingred-show-container">
        <h1>{CapIngredName(ingredient.name)}</h1>
        <img src={process.env.PUBLIC_URL + `/images/${fileName}`} alt={ingredient.name} />
        
        <div className="is-tile-container">
          <h2>Description</h2>
          <hr/>
          <div className="is-show-desc">
            {ingredient.description ? <p>{ingredient.description}</p> : null}
          </div>
        </div>
        <br />
        <div className="is-tile-container">
          <h2>Drinks this can make...</h2>
          <hr/>
          {ingredient.drinks.map(drink => (
            <div className="is-drink-item" key={drink._id}>
              <Link to={{
                pathname: `/drinks/${drink.idDrink}`,
                state: { drink: drink }
              }}
              >{drink.strDrink}
              </Link>
              <hr/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(IngredientShow);