import React from 'react'; 
import { Link } from 'react-router-dom';

// styles
import '../../styles/discover/discover.scss';

class BaseSpiritList extends React.Component {


  render() {
    
    return (
      <div className="base-spirit-container">
        <div className="item-1">
          <Link to="/drinks/">
            Rum
          </Link>
        </div>
        <div className="item-2">
          <Link to ="/drinks/">
            Gin
          </Link>
        </div>
        <div className="item-3">
          <Link to ="/drinks/">
            Whiskey
          </Link>
        </div>
        <div className="item-4">
        <Link to ="/drinks/">
          Tequila
        </Link>  
        </div>
        <div className="item-5">
        <Link to ="/drinks/">
          Brandy
        </Link>
        </div>
        <div className="item-6">
        <Link to ="/drinks/">
          Vodka
        </Link>
        </div>
      </div>


    );
  }
}

export default BaseSpiritList;