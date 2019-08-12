import React from 'react';
import { Link } from 'react-router-dom';
import byocStyles from '../../styles/discover/byoc.scss';
import LoadingIcon from '../loading_icon/loading_icon';

class BYOCPrompt extends React.Component {
	componentDidMount() {
			this.props.fetchAllIngredients();
	}

	render() {
		if (this.props.loading) {
			return <LoadingIcon />;
		}

		return (
			<div className="byoc-container">
				<h1>Pick your base spirit!</h1>
				<div className="byoc-grid-container">
					<div className="byoc-spirits">
						<Link id="d-bs-whiskey" className="byoc-grid-spirit" to={{
							pathname: "/byoc/whiskey",
						}}>Whiskey</Link>
						<Link id="d-bs-vodka" className="byoc-grid-spirit" to={{
							pathname: "/byoc/vodka",
						}}>Vodka</Link>
						<Link id="d-bs-tequila" className="byoc-grid-spirit" to={{
							pathname: "/byoc/tequila",
						}}>Tequila</Link>
						<Link id="d-bs-rum" className="byoc-grid-spirit" to={{
							pathname: "/byoc/rum",
						}}>Rum</Link>
						<Link id="d-bs-gin" className="byoc-grid-spirit" to={{
							pathname: "/byoc/gin",
						}}>Gin</Link>
						<Link id="d-bs-brandy" className="byoc-grid-spirit" to={{
							pathname: "/byoc/brandy",
						}}>Brandy</Link>
					</div>
				</div>
			</div>
		);
	}

}

export default BYOCPrompt;

// TODO: Reduce size of base spirit cards to accomodate for smartphone controls
// that sit beneath the browser

