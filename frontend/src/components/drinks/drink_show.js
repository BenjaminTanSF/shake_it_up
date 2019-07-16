import React from 'react';

class DrinkShow extends React.Component { 
  constructor(props) {
    super(props);
    this.state = this.props.drink || {} ;
  }

  componentDidMount() {
    this.props.fetchSingleDrink(this.props.match.params.drink_id).then(this.setState(this.props.drink));
  }

  render () {
console.log(this.state);
    // debugger

  if (this.props.loading) {
    return <h1>LOADING</h1>; 
  
  } else { 

    return (
      <div>
        <h1>{this.state.strDrink}</h1>
      </div> )   
    } 
  }
}

export default DrinkShow;

