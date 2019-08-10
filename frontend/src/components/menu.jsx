import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import discover from '../assets/icons/discover2x.png';
import discoverActive from '../assets/icons/discover_red.png';
import cocktail from '../assets/icons/cocktail.png';
import cocktailActive from '../assets/icons/cocktail-red.png';
import ingredient from '../assets/icons/ingredients-black-2x.png';
import ingredientActive from '../assets/icons/ingredients_red_2x.png';
import about from '../assets/icons/about.png';
import aboutActive from '../assets/icons/about_red.png';


class Menu extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { pathname } = this.props.history.location;

		return (
			<div className="menu-container desktop-hidden">
				<div className="menu-item-container">
					<NavLink exact to="/" className="menu-item-container" activeClassName="menu-active">
						<img alt="menuItem" className="menu-icon" src={pathname === "/" ? discoverActive : discover}></img>
						{/* <span>Discover</span> */}
					</NavLink>
				</div>
				<div className="menu-item-container">
					<NavLink to="/drinks" className="menu-item-container" activeClassName="menu-active">
						<img alt="menuItem" className="menu-icon" src={pathname.includes("drinks") ? cocktailActive : cocktail}></img>
						{/* <span>Cocktails</span> */}
					</NavLink>
				</div>
				<div className="menu-item-container">
					<NavLink to="/ingredients" className="menu-item-container" activeClassName="menu-active">
						<img alt="menuItem" className="menu-icon" src={pathname.includes("ingredients") ? ingredientActive : ingredient}></img>
						{/* <span>Ingredients</span> */}
					</NavLink>
				</div>
				<div className="menu-item-container">
					<NavLink to="/about" className="menu-item-container" activeClassName="menu-active">
						<img alt="menuItem" className="menu-icon" src={pathname.includes("about") ? aboutActive : about}></img>
						{/* <span>About</span> */}
					</NavLink>
				</div>
			</div>
		);
	}

}

export default withRouter(Menu);

// TODO: Add subtle black overlay for base spirit cards
