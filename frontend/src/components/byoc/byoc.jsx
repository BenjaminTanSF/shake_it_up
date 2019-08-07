import React from 'react';
import { Link } from 'react-router-dom';
import byocStyles from '../../styles/discover/byoc.scss';
import LoadingIcon from '../loading_icon/loading_icon';

class BYOCPrompt extends React.Component {
	componentDidMount() {
		if (!this.props.ingredientsFullyLoaded)
			this.props.fetchAllIngredients();
	}

	render() {
		let nameImagePair = this.props.ingredients.map(ingredient => (
			{
				name: ingredient.name,
				imageURL: ingredient.strIngredientThumb
			}
		));

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
							state: {
								base: this.props.ingredients.filter(ing => ing.name.includes("whiskey")),
								images: nameImagePair
							}
						}}>Whiskey</Link>
						<Link id="d-bs-vodka" className="byoc-grid-spirit" to={{
							pathname: "/byoc/vodka",
							state: {
								base: this.props.ingredients.filter(ing => ing.name.includes("vodka")),
								images: nameImagePair
							}
						}}>Vodka</Link>
						<Link id="d-bs-tequila" className="byoc-grid-spirit" to={{
							pathname: "/byoc/tequila",
							state: {
								base: this.props.ingredients.filter(ing => ing.name.includes("tequila")),
								images: nameImagePair
							}
						}}>Tequila</Link>
						<Link id="d-bs-rum" className="byoc-grid-spirit" to={{
							pathname: "/byoc/rum",
							state: {
								base: this.props.ingredients.filter(ing => ing.name === "rum" || ing.name.includes(" rum")),
								images: nameImagePair
							}
						}}>Rum</Link>
						<Link id="d-bs-gin" className="byoc-grid-spirit" to={{
							pathname: "/byoc/gin",
							state: {
								base: this.props.ingredients.filter(ing => ing.name === "gin" || ing.name.includes(" gin")),
								images: nameImagePair
							}
						}}>Gin</Link>
						<Link id="d-bs-brandy" className="byoc-grid-spirit" to={{
							pathname: "/byoc/brandy",
							state: {
								base: this.props.ingredients.filter(ing => ing.name.includes("brandy")),
								images: nameImagePair
							}
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

