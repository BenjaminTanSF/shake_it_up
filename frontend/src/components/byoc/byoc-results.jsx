import React from 'react';
import { Link } from 'react-router-dom';
import byocStyles from '../../styles/discover/byoc.scss'

class BYOCResults extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			ingredients: this.props.location.state.ingredients,
			images: this.props.location.state.images,
			compatibleIngredients: null,
			drinks: null
		}
		this.updateIng = this.updateIng.bind(this);
	}

	componentDidMount() {
		let drinks = [];
		let compatibleIngredients = [];
		this.state.ingredients.forEach(ing => {
			let ingDrinks = ing.drinks;
			ingDrinks.forEach(drink => {
				if (!drinks.map(d => d.strDrink).includes(drink.strDrink)) {
					drinks.push(drink);
				}
			})
		});

		drinks.forEach(drink => {
			for (let i = 1; i <= 15; i++) {
				if (drink[`strIngredient${i}`] === "" || drink[`strIngredient${i}`] === undefined || drink[`strIngredient${i}`] === null) {
					break;
				} else if (!compatibleIngredients.map(ci => ci.name).includes(drink[`strIngredient${i}`].toLowerCase())) {
					compatibleIngredients.push(
						this.state.images.find(imageObj => imageObj.name === drink[`strIngredient${i}`].toLowerCase())
					);
				}
			}
		});

		this.setState({
			drinks,
			compatibleIngredients
		});
	}

	updateIng(ingredientName) {
		return e => {
			let newDrinks = this.state.drinks.filter(drink => {
				for (let i = 1; i <= 15; i++) {
					if (!(drink[`strIngredient${i}`] === "" || drink[`strIngredient${i}`] === undefined || drink[`strIngredient${i}`] === null) && (drink[`strIngredient${i}`].toLowerCase() === ingredientName)) {
						return true;
					}
				}
				return false;
			});

			let newCompatibles = [];
			newDrinks.forEach(drink => {
				for (let i = 1; i <= 15; i++) {
					if (drink[`strIngredient${i}`] === "" || drink[`strIngredient${i}`] === undefined || drink[`strIngredient${i}`] === null) {
						break;
					} else if (!newCompatibles.map(ci => ci.name).includes(drink[`strIngredient${i}`].toLowerCase())) {
						newCompatibles.push(
							this.state.images.find(imageObj => imageObj.name === drink[`strIngredient${i}`].toLowerCase())
						);
					}
				}
			});

			this.setState({
				drinks: newDrinks,
				compatibleIngredients: newCompatibles
			})
		}
	};

	render() {
		if (this.state.drinks) {
			return (
				<div className="byoc-results-container">
					<input type="button" value="TEST" onClick={this.updateIng("orange juice")} />
				</div>
			);
		} else {
			return (
				<h1>NULL</h1>
			)
		}
	}

}

export default BYOCResults;

