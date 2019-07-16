import React from 'react';

class DrinkShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.drink;
  }

  componentDidMount() {
    this.props.fetchSingleDrink(this.props.match.params.id);
  }

  render() {
    debugger

    if (!this.props.drink) {
      return null;
    }

    return (
      <div>
        <h1>{this.props.drink.drinkId}</h1>
        <img src={this.props.drink.strDrinkThumb} alt={this.props.drink.strDrink}/>
      </div>
    )
  }


}

export default DrinkShow;

