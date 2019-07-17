import React from 'react';

import '../../styles/drinks/drink_show.scss';

class DrinkShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.drink || {};
  }

  componentDidMount() {
    this.props.fetchSingleDrink(this.props.match.params.drink_id).then(this.setState(this.props.drink));
  }

  render() {

    if (this.props.loading) {
      return <h1>LOADING</h1>;
    }

    const DisplayInstrucs = () => {
      if (this.props.drink.strInstructions !== "") {
        return (
          <>
            <h2>Instructions</h2>
            <div className="drink-show-desc">
              {this.props.drink.strInstructions}
            </div>
          </>
        )
      } else {
        return null;
      }
    }

    return (

      <div className="drink-show-container">

        <h1>{this.props.drink.strDrink}</h1>
        <img className="drink-show-img" alt={this.props.drink.strDrink} src={this.props.drink.strDrinkThumb} />

        <div className="drink-show-desc">
          <h2>Ingredients</h2>

          {/* // measurements */}
          <div className="drink-show-measure-ingr-wrapper">
            <div>
              {Object.keys(this.props.drink).filter(key => key.includes('strMeasure') && this.props.drink[key] !== "").map(key =>
                <div key={key}>{this.props.drink[key]}</div>
              )}
            </div>

            {/* // ingredients */}
            <div>
              {Object.keys(this.props.drink).filter(key => key.includes('strIngredient') && this.props.drink[key] !== "").map(key =>
                <div key={key}>{this.props.drink[key]}</div>
              )}
            </div>

          </div>
          
          <DisplayInstrucs/>

        </div>

      </div>)
  }

}

export default DrinkShow;

