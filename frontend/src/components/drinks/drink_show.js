import React from 'react';

import '../../styles/drinks/drink_show.scss';

class DrinkShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {drink: this.props.drink || {}};
  }

  componentDidMount() {
    this.props.fetchSingleDrink(this.props.match.params.drink_id, () => this.setState({drink: this.props.drink}));
  }


  render() {
    let drinkId = this.props.match.params.drink_id;

    let drinks = this.props.drinks || [];
    let drink = drinks.find(dr => {
      return dr.idDrink + ''=== drinkId + ''}) || {};
    
    if (this.props.loading) {
      return <h1>LOADING</h1>;
    }

    const DisplayInstructions = () => {
      if (drink.strInstructions !== "") {
        return (
          <>
            <div className="ds-tile-container">
              <h2>Instructions</h2>
              <hr />
              <div className="drink-show-desc">
                {drink.strInstructions}
              </div>
            </div>
          </>
        )
      } else {
        return null;
      }
    }

    const DisplayIngredients = () => {
      let result = []; // [['meas1, ingred1'], ['meas2, ingred2']]
      for (let i = 1; i <= 15; i++) {
        let sub = [];
        let measure = drink[`strMeasure${i}`];
        let ingred = drink[`strIngredient${i}`];
        if ((measure !== "" && ingred !== "") && (measure !== " " && ingred !== " ") && (measure !== null && ingred !== null)) {
          sub.push([measure, ingred]);
          result.push(sub);
        }
      }

      return result.map(item =>
        <>
          <div className="ds-item-wrapper">
            <div className="ds-ing-meas">
              {(() => {
                if (
                  (item[0][0] === "" && item[0][0] === " " && item[0][0] === "\n")
                  &&
                  (!item[0][1] === "" && !item[0][1] === " " && !item[0][1] === "\n")
                ) {
                  return 1;
                } else {
                  return item[0][0];
                }
              })()}
            </div>
            <div className="ds-ing-item">
              {item[0][1]}
            </div>
            <hr />
          </div>
        </>
      )
    }

    return (

      <div className="drink-show-container">

        <div className="drink-show-img-container">
          <img className="drink-show-img" alt={drink.strDrink} src={drink.strDrinkThumb} />
          <div className="drink-show-title">
            <h1>{drink.strDrink}</h1>
          </div>
        </div>

        <div>&nbsp;</div>

        <div className="drink-show-desc">

          <div className="ds-tile-container">
            <h2>Ingredients</h2>
            <hr />

            <div className="drink-show-measure-ingr-wrapper">
              <DisplayIngredients />
            </div>

          </div>

          <div>&nbsp;</div>

          <DisplayInstructions />

        </div>

        <div>&nbsp;</div>
      </div>
    )
  }
}

export default DrinkShow;

