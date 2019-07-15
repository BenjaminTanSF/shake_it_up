import React from 'react'; 
import BaseSpiritItem from './base_spirit_item';
// import { Link } from 'react-router-dom';

class BaseSpirit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { baseSpirits } = this.props; assuming we get baseSpirits from container
    const baseSpirits = ["Rum","Gin","Whiskey","Tequila","Brandy","Vodka"]
    const baseSpiritItems = baseSpirits.map(spirit => (
        // <li><BaseSpiritItem/></li>      
        <li>
          {/* <Link to="#">{spirit}</Link> */}
          {spirit}
        </li>
    ));
    return (
      <div>
        <ul>
          {baseSpiritItems}
          {/* <BaseSpiritItem/> */}
        </ul>
      </div>
    );
  }
}

export default BaseSpirit;