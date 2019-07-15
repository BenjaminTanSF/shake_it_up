import React from 'react'; 
import BaseSpiritItem from './base_spirit_item';
import { Link } from 'react-router-dom';

// styles
import '../../styles/splash.scss';

class BaseSpiritList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const baseSpirits = ["Rum","Gin","Whiskey","Tequila","Brandy","Vodka"];
    // const baseSpiritItems = baseSpirits.map(spirit => (   
    //     // <li>
    //     //   {spirit}
    //     // </li>
    //     <div>
    //       {spirit}
    //     </div>
    // ));
    
    return (
      <div className="base-spirit-container">
        <div className="item-1">
          Rum
        </div>
        <div className="item-2">
          Gin
        </div>
        <div className="item-3">
          Whiskey
        </div>
        <div className="item-4">
          Tequila
        </div>
        <div className="item-5">
          Brandy
        </div>
        <div className="item-6">
          Vodka
        </div>
      </div>


    );
  }
}

export default BaseSpiritList;