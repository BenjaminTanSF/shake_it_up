import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../../styles/ingredients/ingredient_index.scss';
import Loader from '../loader/cocktail_loader';
import LoadingIcon from '../loading_icon/loading_icon';

class IngredientsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: props.ingredients,
      shownIngredients: props.ingredients,
      searchStr: "",
      loaderTime: true
    }
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch() {
    return e => {
      this.setState({
        searchStr: e.currentTarget.value,
        shownIngredients: this.state.ingredients.filter(ingredient => (
          ingredient.name.toLowerCase().includes(e.currentTarget.value.toLowerCase())
        ))
      })
    }
  }
  componentDidMount() {
      this.props.fetchAllIngredients(() => (this.setState({
        ingredients: this.props.ingredients,
        shownIngredients: this.props.ingredients,
        searchStr: ""
      })));
  }

  render() {
    if (this.props.loading) { return <LoadingIcon /> }
    // if (this.props.loading) { return <Loader id="loader-component"/>; }
    else {
      return (
        <div className="ingred-index-container">

          {/* Search Bar */}
          <div className="search-container">
            <label>
              <input type="text"
                value={this.state.searchStr}
                onChange={this.updateSearch()}
                className="search"
                placeholder="Search for an ingredient" />
              {/* <span id = "emoji"> 🔍🔎 </span> */}
            </label>
          </div>
          <div id="ingred-index-h1-container">
            <h1 id="ingred-index-h1">Ingredients</h1>
          </div>

          <div className="ingred-tile-container">
            {this.state.shownIngredients.map(ingredient => {
              let fileName = ingredient.strIngredientThumb.slice(82, (ingredient.strIngredientThumb.length - 9))
              return (
                < div key={ingredient._id} className="ingred-index-tile">
                  <Link to={{
                    pathname: `/ingredients/${ingredient.name}`,
                    state: {
                      ingredient: ingredient
                    }
                  }}>
                    <img src={process.env.PUBLIC_URL + `/images/${fileName}`} className="ingred-index-img" width="90%" alt={ingredient.name} />
                    <span className="ingred-index-name">{ingredient.name}</span>
                  </Link>
                  <hr></hr>
                  <br />
                </div>
              )
            })}
          </div>
        </div>
      )
    }
  }
}

export default withRouter(IngredientsIndex);