import React from 'react';
import { NavLink } from 'react-router-dom';
import discover from '../assets/icons/discover2x.png';
import discoverActive from '../assets/icons/discover_red.png';
import cocktail from '../assets/icons/cocktail.png';
import cocktailActive from '../assets/icons/cocktail-red.png';
import ingredient from '../assets/icons/ingredients.png';
import ingredientActive from '../assets/icons/ingredients_red.png';
import about from '../assets/icons/about.png';
import aboutActive from '../assets/icons/about_red.png';


class Menu extends React.Component {

    render() {
        return (
            <div className="menu-container">
                {/* <div className="menu-item-container"> */}
                    <NavLink to="/byoc" className="menu-item-container" activeClassName="menu-active">
                        <img className="menu-icon" src={ discover }></img>
                        <span>Discover</span>
                    </NavLink>
                {/* </div> */}
                {/* <div className="menu-item-container"> */}
                    <NavLink to="/drinks" className="menu-item-container" activeClassName="menu-active">
                        <img className="menu-icon" src={ cocktail }></img>
                        <span>Cocktails</span>
                    </NavLink>
                {/* </div> */}
                {/* <div className="menu-item-container"> */}
                    <NavLink to="/ingredients" className="menu-item-container" activeClassName="menu-active">
                        <img className="menu-icon" src={ ingredient }></img>
                        <span>Ingredients</span>
                    </NavLink>
                {/* </div> */}
                {/* <div className="menu-item-container"> */}
                    <NavLink to="/about" className="menu-item-container" activeClassName="menu-active">
                        <img className="menu-icon" src={ about }></img>
                        <span>About</span>
                    </NavLink>
                {/* </div> */}
            </div>
        );
    }

}

export default Menu;