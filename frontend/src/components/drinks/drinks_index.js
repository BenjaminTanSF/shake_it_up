import React from 'react';

class DrinksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDrinks();
  }
  
  render () {
    return (
      <div>
        <h1>Drinks Index</h1>
        <div>
          
        </div>
      </div>
    )
  }

}

export default DrinksIndex;