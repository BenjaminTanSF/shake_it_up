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

    // const DisplayInstructions = () => {
    //   if (drink.strInstructions !== "") {
    //     return (
    //       <>
    //         <h2>Instructions</h2>
    //         <div className="drink-show-desc">
    //           {drink.strInstructions}
    //         </div>
    //       </>
    //     )
    //   } else {
    //     return null;
    //   }
    // }

    const DisplayIngredients = () => {
      let result = []; // [['1/2, Lime'], ['1, Egg Yolk']]
      for (let i=1; i<=15; i++) {
        if (drink[`strIngredient${i}`] !== "" && drink[`strIngredient${i}`] !== " ") {
          // result.push(drink[`strMeasure${i}`]+" "+drink[`strIngredient${i}`]);
          let sub = [];
          let measure = drink[`strMeasure${i}`];
          let ingred = drink[`strIngredient${i}`];
          // if (!measure || !measure.match(/\[[0-9]+\]/)) measure = 1;
          sub.push([measure, ingred]);
          result.push(sub);
        }
      }

      // return result.map(item => 
      //  <div className="ds-ing-item">
      //   {item}
      //   <hr />
      // </div>
      // )
      

      return result.map(item => 
      <>
        <div className="ds-item-wrapper">
          <div className="ds-ing-meas">
            {(() => {
              if (item[0][0] === "" || item[0][0] === " " || item[0][0] === "\n") {
                return 1;
              } else {
                return item[0][0];
              }
            })()}
          </div>
          <div className="ds-ing-item">
            {item[0][1]}
          </div>
        </div>
        <hr/>
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
          <hr/>
   
            <div className="drink-show-measure-ingr-wrapper">
              <div>
                <DisplayIngredients/>
              </div>
            </div>

          </div>

          <div>&nbsp;</div>

          {/* <DisplayInstructions /> */}

          {drink.strInstructions !== "" ? 
          <>
            <div className="ds-tile-container">
              <h2>Instructions</h2>
              <hr/>
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

