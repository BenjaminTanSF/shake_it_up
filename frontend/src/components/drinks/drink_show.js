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

    let drink = this.props.drink || {};

    if (this.props.loading) {
      return <h1>LOADING</h1>;
    }

    const DisplayInstrucs = () => {
      if (drink.strInstructions !== "") {
        return (
          <>
            <h2>Instructions</h2>
            <div className="drink-show-desc">
              {drink.strInstructions}
            </div>
          </>
        )
      } else {
        return null;
      }
    }

    return (

      <div className="drink-show-container">


        <img className="drink-show-img" alt={drink.strDrink} src={drink.strDrinkThumb} />
        <h1>{drink.strDrink}</h1>

        <div className="drink-show-desc">

          <div className="ds-tile-container">
          <h2>Ingredients</h2>
            <div className="drink-show-measure-ingr-wrapper">

              {/* // measurements */}
              <div>
                {Object.keys(drink).filter(key => key.includes('strMeasure') && drink[key] !== "").map(key =>
                  <div className="ds-measure-item" key={key}>
                    {drink[key]}
                    <hr />
                  </div>
                )}
              </div>

              {/* // ingredients */}
              <div>
                {Object.keys(drink).filter(key => key.includes('strIngredient') && drink[key] !== "").map(key =>
                  <div className="ds-ing-item" key={key}>
                    {drink[key]}
                    <hr/>
                  </div>
                )}
              </div>
            </div>

          </div>


          <div>&nbsp;</div>

          {/* <DisplayInstrucs /> */}

          {drink.strInstructions !== "" ? 
          <>
            <div className="ds-tile-container">
              <h2>Instructions</h2>
              <div className="drink-show-desc">
                {drink.strInstructions}
              </div>
            </div>
          </> 
            : null}

        </div>

        <div>&nbsp;</div>
      </div>)
  }

}

export default DrinkShow;

