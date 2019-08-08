import React from 'react';
import { Link } from 'react-router-dom';

// styles
import '../../styles/discover/discover.scss';

class BaseSpiritList extends React.Component {

  render() {
    return (
      <div className="discover-base">
        <h1 id="base-spirit-h1">Base Spirits</h1>
        <div className="discover-base-spiritlist">
          <Link id="d-bs-whiskey" className="discover-spirit" to="ingredients/whiskey">Whiskey</Link>
          <Link id="d-bs-vodka" className="discover-spirit" to="ingredients/rum">Vodka</Link>
          <Link id="d-bs-tequila" className="discover-spirit" to="ingredients/vodka">Tequila</Link>
          <Link id="d-bs-rum" className="discover-spirit" to="ingredients/tequila">Rum</Link>
          <Link id="d-bs-gin" className="discover-spirit" to="ingredients/gin">Gin</Link>
          <Link id="d-bs-brandy" className="discover-spirit" to="ingredients/brandy">Brandy</Link>
        </div>
      </div>


    );
  }
}

export default BaseSpiritList;