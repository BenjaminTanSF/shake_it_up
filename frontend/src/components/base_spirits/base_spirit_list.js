import React from 'react'; 
import BaseSpiritItem from './base_spirit_item';

class BaseSpirit extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    // const { baseSpirits } = this.props; assuming we get baseSpirits from container
    const baseSpirits = ["Rum","Gin","Whiskey","Tequila","Brandy","Vodka"]
    const baseSpiritItems = baseSpirits.map(spirit => (
        // <li><BaseSpiritItem/></li>      
        <li>{spirit}</li>
    ));
    return (
      <div>
        <ul>
          {baseSpiritItems}
        </ul>
      </div>
    );
  }
}

export default BaseSpirit;