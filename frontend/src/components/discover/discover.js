import React from 'react';
import BaseSpiritList from '../base_spirits/base_spirits';
import { Link } from 'react-router-dom';
import Menu from '../menu';
import Header from '../header';

class Discover extends React.Component {

  render() {
    return (
      <div className="discover-page-container">
        
        {/* <div className="discover-header">
          <span>Shake it Up!</span>
        </div> */}
          <div className="discover-hero">
          <Header />
            {/* <div id="hero-image"></div> */}
            <div id="hero-tag">
              Let's build a cocktail, together!
            </div>
            <Link id="get-started" to="/byoc">Get Started</Link>
          </div>
          <div className="discover-featured">
            <h1>Featured Cocktails</h1>
            <div className="discover-slideshow"></div>
          </div>
          <div className="discover-base">
            <h1>Base Spirits</h1>
            <div className="discover-base-spiritlist">
                {/* <Link id="d-bs-whiskey" className="discover-spirit" to="">Whiskey</Link> */}
                <div className="bs-overlay">
                  <Link id="d-bs-whiskey" className="discover-spirit" to="">Whiskey</Link>
                </div>
                <Link id="d-bs-vodka" className="discover-spirit" to="">Rum</Link>
                <Link id="d-bs-tequila" className="discover-spirit" to="">Vodka</Link>
                <Link id="d-bs-rum" className="discover-spirit" to="">Tequila</Link>
                <Link id="d-bs-gin" className="discover-spirit" to="">Gin</Link>
                <Link id="d-bs-brandy" className="discover-spirit" to="">Brandy</Link>
            </div>
          </div>
          {/* <Menu /> */}
        {/* <div className="menu-temp"></div> */}
      </div>
    );
  }

}

export default Discover;

// TODO: Add "cocktail buddy" icon above "Get Started" link