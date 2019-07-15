import React from 'react'; 
import BaseSpiritItem from './base_spirit_item';

class BaseSpirit extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    // const { actions } = this.props;
    const baseSpirits = ["rum","gin"]
    const baseSpiritItems = baseSpirits.map(spirit => (
        <li><BaseSpiritItem/></li>      
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