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
		this.compatibleIngAmount = this.compatibleIngAmount.bind(this);
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
			this.setState({
				ingredients: this.state.ingredients.concat({ name: ingredientName })
			});

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
					} else if (!newCompatibles.concat(this.state.ingredients).map(ci => ci.name).includes(drink[`strIngredient${i}`].toLowerCase()) && drink[`strIngredient${i}`].toLowerCase() !== ingredientName) {
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

	compatibleIngAmount() {
		return this.state.compatibleIngredients.length ? "byoc-results-ci-header" : "byoc-results-ci-header-dn";
	}

	render() {
		console.log(this.state);
		if (this.state.drinks) {
			return (
				<div className="byoc-results-container">

					{/* Compatible Ingredients */}
					<div className="byoc-results-compatibles-container">
						<h1 id={ this.compatibleIngAmount() }>Compatible Ingredients</h1>
						<div className="byoc-result-compatible-ingredients">
							{this.state.compatibleIngredients.map(ingredient => {
								let fileName = ingredient.imageURL.slice(82, (ingredient.imageURL.length - 9))
								return (
									<div className="byoc-result-compatible-card" key={ingredient.name} onClick={this.updateIng(ingredient.name)}>
										{/* <img src={process.env.PUBLIC_URL + `/images/${fileName}`} alt={ingredient.name} /> */}
										<span>{ingredient.name}</span>
									</div>
								)
							})}
						</div>
					</div>

					<br />

					{/* Compatible Drinks */}
					<div className="byoc-result-drinks-container">
						<h1>Potential Drinks</h1>
						<div className="byoc-result-drinks-carousel">
						{this.state.drinks.map(drink => (
							<div className="byoc-result-drink-card" key={drink.idDrink}>
								<Link to={{ pathname: `/drinks/${drink.idDrink}` }} className="byoc-result-drink-link">
									<img src={drink.strDrinkThumb} alt={drink.strDrink} />
									<span className="byoc-result-drinkTitle">{drink.strDrink}</span>
								</Link>
							</div>
						))}
						</div>
					</div>
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

// TODO: Tapping a compatible ingredient resets the carousel to the beginning
// TODO: Styling for ingredients carousel
// TODO: Fix min-width for compatible ingredient cards. Some of the names don't fit
