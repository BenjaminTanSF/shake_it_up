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
    let ingredient = this.state.ingredient || {};
    let numDrinks = ingredient.drinks ? ingredient.drinks.length : 0;
    let fileName = undefined;
    
    if (ingredient.strIngredientThumb) fileName = ingredient.strIngredientThumb.slice(82, (ingredient.strIngredientThumb.length - 9));

    const DisplayDescription = () => {
      if (ingredient.description !== "" && ingredient.description !== null) {
        return (
          <div className='is-desc'>
            <div className="is-tile-container">
              <h2>Description</h2>
              <hr />
              <span className="is-show-desc">
                {ingredient.description}
              </span>
            </div>
          </ div >
        )
      } else {
        return null;
      }
    }

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

        <div className = 'is-centerer'>
        <h1 className = 'mobile-ingred-title'>{CapIngredName(ingredient.name)}</h1>
        <div className = 'desktop-is-left'>

          {numDrinks>6 ?
        <h1 className = 'desktop-ingred-title'>{CapIngredName(ingredient.name)}</h1>
        : ''}

        <div className="is-img-wrapper">

          <img className={numDrinks<3 || !ingredient.description ? "ingred-show-img" : 'ingred-show-img-shrink'} src={process.env.PUBLIC_URL + `/images/${fileName}`} alt={ingredient.name} />
         <div className={numDrinks>3 ? 'mobile-hidden' : 'hidden'}> <DisplayDescription/></div>    

        </div>
        </div>

        <div className='desktop-is-right'>
        {numDrinks<=6 ?
        <h1 className = 'desktop-ingred-title'>{CapIngredName(ingredient.name)}</h1>
        : ''}
          <div className = 'description-width-setter-2'>
        <div className={numDrinks > 3 ? 'desktop-hidden' : ''}>
        <DisplayDescription />
          </div>
        <br />
        <div className="is-drinks">
          <h2>Drinks this can make...</h2>
          <hr/>
          <div className = 'desktop-is-grid'>
          {ingredient.drinks.map(drink => (
            <div className="is-drink-item" key={drink._id}>
              <Link to={{
                pathname: `/drinks/${drink.idDrink}`,
                state: { drink: drink }
              }}
              >
                <img 
                src={drink.strDrinkThumb} 
                alt={drink.strDrink}
                className='mobile-hidden is-drink-pic'/>
              {drink.strDrink}
              </Link>
              <hr/>
            </div>
          ))}
          </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default withRouter(IngredientShow);