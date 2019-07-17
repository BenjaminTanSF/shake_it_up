import React from 'react';
import BaseSpiritList from '../base_spirits/base_spirits';
import { Link } from 'react-router-dom';

class Discover extends React.Component {

  render() {
    return (
      <div className="discover-page-container">
        <div className="discover-hero">
          <div id="hero-tag">
            Let's build a cocktail, together!
            </div>
          <Link id="get-started" to="/byoc">Get Started</Link>
        </div>
        <div className="discover-featured">
          <h1>Featured Cocktails</h1>
        </div>
        <div className="discover-slideshow-wrapper">

          <div className="discover-slideshow">
            <div className="discover-slideshow-item">
              <Link to="/drinks/11003">Negroni</Link>
            </div>
            <div className="discover-slideshow-item" >
              <Link to="/drinks/17836">Acapulco</Link>
            </div>
            <div className="discover-slideshow-item" >
              <Link to="/drinks/11243">Chocolate Black Russian</Link>
            </div>
            <div className="discover-slideshow-item" >
              <Link to="/drinks/11375">Foxy Lady</Link>
            </div>
          </div>

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
      </div>
    );
  }

}

export default Discover;

// TODO: Add "cocktail buddy" icon above "Get Started" link