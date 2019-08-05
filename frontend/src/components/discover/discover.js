import React from 'react';
import BaseSpiritList from '../base_spirits/base_spirits';
import { Link } from 'react-router-dom';

class Discover extends React.Component {

  render() {
    console.log('discover');
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
            <div className="discover-slideshow-item" >
              <Link to="/drinks/11009">Moscow Mule</Link>
            </div>
            <div className="discover-slideshow-item" >
              <Link to="/drinks/14229">747</Link>
            </div>
            <div className="discover-slideshow-item" >
              <Link to="/drinks/15300">3-Mile Long Island Iced Tea</Link>
            </div>
            <div className="discover-slideshow-item" >
              <Link to="/drinks/17079">Baby Guinness</Link>
            </div>
            <div className="discover-slideshow-item" >
              <Link to="/drinks/17267">Bahama Mama</Link>
            </div>
          </div>

        </div>
        <BaseSpiritList />
      </div>
    );
  }

}

export default Discover;

// TODO: Add "cocktail buddy" icon above "Get Started" link