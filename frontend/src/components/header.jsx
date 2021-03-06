import React from 'react';
import { withRouter, Link, NavLink } from 'react-router-dom';
import discover from '../assets/icons/discover-white-2x.png';
import discoverActive from '../assets/icons/discover_red2x.png';
import cocktail from '../assets/icons/cocktail-white-2x.png';
import cocktailActive from '../assets/icons/cocktail-red.png';
import ingredient from '../assets/icons/ingredients-white-2x.png';
import ingredientActive from '../assets/icons/ingredients_red_2x.png';
import about from '../assets/icons/about-white-2x.png';
import aboutActive from '../assets/icons/about_red.png';

class Header extends React.Component {

	render() {
		const { pathname } = this.props.history.location;

		return (
			<div className="discover-header">

				<div className="menu-item-container mobile-hidden">
					<NavLink exact to="/" className="menu-item-container" activeClassName="menu-active">
						<img alt="menuItem" className="menu-icon" src={pathname === "/" ? discoverActive : discover}></img>
						{/* <span>Discover</span> */}
					</NavLink>
				</div>

				<div className="menu-item-container mobile-hidden">
					<NavLink to="/drinks" className="menu-item-container" activeClassName="menu-active">
						<img alt="menuItem" className="menu-icon" src={pathname.includes("drinks") ? cocktailActive : cocktail}></img>
						{/* <span>Cocktails</span> */}
					</NavLink>
				</div>

				<Link to="/">Shake it Up!</Link>

				<div className="menu-item-container mobile-hidden">
					<NavLink to="/ingredients" className="menu-item-container" activeClassName="menu-active">
						<img alt="menuItem" className="menu-icon" src={pathname.includes("ingredients") ? ingredientActive : ingredient}></img>
						{/* <span>Ingredients</span> */}
					</NavLink>
				</div>

				<div className="menu-item-container mobile-hidden">
					<NavLink to="/about" className="menu-item-container" activeClassName="menu-active">
						<img alt="menuItem" className="menu-icon" src={pathname.includes("about") ? aboutActive : about}></img>
						{/* <span>About</span> */}
					</NavLink>
				</div>

			</div>
		);
	}

}

export default withRouter(Header);

