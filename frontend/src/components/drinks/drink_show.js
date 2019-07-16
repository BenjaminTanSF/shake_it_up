import React from 'react';

// styles
import '../../styles/drinks/drink_show.scss';

class DrinkShow extends React.Component { 
  constructor(props) {
    super(props);
    this.state = this.props.drink || {} ;
  }

  componentDidMount() {
    this.props.fetchSingleDrink(this.props.match.params.drink_id).then(this.setState(this.props.drink));
  }

  render () {

  if (this.props.loading) {
    return <h1>LOADING</h1>; 
  } 

  
//   const ShowIng = () => {
//     let ings = [];
//     if (Object.keys(this.props.drink).includes('Ingredient')) {
//       ings.push(Object.values(this.props.drink))
//     }
//     return ings;
//   }
  
// debugger

  return (

    <div className="drink-show-container">

      <h1>{this.state.strDrink}</h1>
      <img className="drink-show-img" width="90%" alt={this.state.strDrink} src={this.state.strDrinkThumb}/>

      <div className="drink-show-desc">
        <h2>Ingredients</h2>
        {/* {this.props.map} */}
        <h2>Instructions</h2>
        <div className="drink-show-desc">
          {this.state.strInstructions}
        </div>

      </div>

    </div> )   
  } 

}

export default DrinkShow;

