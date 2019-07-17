import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import '../../styles/ingredients/ingredient_index.scss';

class IngredientsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: props.ingredients,
      shownIngredients: props.ingredients,
      searchStr: ""
    }
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch() {
    return e => {
      this.setState({
        searchStr: e.target.value,
        shownIngredients: this.state.ingredients.filter(ingredient => (
          ingredient.name.includes(this.state.searchStr)
        ))
      })
    }
  }
  componentDidMount() {
    this.props.fetchAllIngredients();
  }

  render() {
    const { ingredients, loading } = this.props;
    if (loading) { return <h1>LOADING</h1>; }
    else {
      return (
        <div className="ingred-idx-container">
          <div className="search-container">
          <label>
            <input type="text"
              // value=""
              // onChange=""
              className="search"
              placeholder="Search for a cocktail"/>
              {/* <span id = "emoji"> 🔍🔎 </span> */}
          </label>
       </div>
          <h1>Ingredients</h1>
          {ingredients.map(ingredient => (
            <div key={ingredient._id}>
              <Link to={{
                pathname: `/ingredients/${ingredient.name}`,
                state: {
                  ingredient: ingredient
                }
              }}>
                {/* <img src={ingredient.strIngredientThumb} alt={ingredient.name} />
                  {ingredient.name} */}

                {/* placeholder until imgs move from GH to AWS */}
                <img src="https://img.discogs.com/gG_ZrnTKaTktYrQ8TwfXletVbe8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/L-213313-1286891070.jpeg.jpg" className="ingred-idx-img" width="90%" alt={ingredient.name} />
                <div className="ingred-idx-name">
                  {ingredient.name}
                </div>
              </Link>
              <br />
            </div>
          ))}
        </div>
      )
    }
  }
}

export default withRouter(IngredientsIndex);