import React from 'react';
import { Link } from 'react-router-dom';
import byocStyles from '../../styles/discover/byoc.scss'

class BYOCResults extends React.Component {

	constructor(props) {
		super(props);
		let loaded = false;
		if (props.location.state){
			loaded = true;
		}
		let lstate = props.location.state || {};
		this.state = {
			base: lstate.base || [],
			ingredients: [],
			images: lstate.images || [],
			compatibleIngredients: [],
			drinks: [],
			loaded

		}
		this.updateIng = this.updateIng.bind(this);
		this.compatibleIngAmount = this.compatibleIngAmount.bind(this);
		this.resetIngCarousel = this.resetIngCarousel.bind(this);
		this.resetDrinkCarousel = this.resetDrinkCarousel.bind(this);
	}

	setDrinks(cb){
		let drinks = [];
		this.state.base.forEach(ing => {
			let ingDrinks = ing.drinks;
			ingDrinks.forEach(drink => {
				if (!drinks.map(d => d.strDrink).includes(drink.strDrink)
				&& this.state.ingredients.every(ing => ing.drinks.map(
					dr => dr.strDrink).includes(drink.strDrink)
				)) {
					drinks.push(drink);
				}
			})
		});

		this.setState({
			drinks
		}, cb);

	}
		 setCompatibles(){	
			let drinks = this.state.drinks;
			let pathString= this.props.match.params.spirit_name.split('%20').join(' ');
			let pathIngredients = pathString.split(',');
			pathIngredients = this.state.ingredients.concat(this.state.base).map(ing => ing.name);
			let compatibleIngredients = [];
			let compatibleIngNames = compatibleIngredients.map(ci => ci.name);
			drinks.forEach((drink, drinkIdx) => {
				for (let i = 1; i <= 15; i++) {
					if (drink[`strIngredient${i}`] === "" || drink[`strIngredient${i}`] === undefined || drink[`strIngredient${i}`] === null) {
						break;
					} else if (!(compatibleIngNames.concat(pathIngredients)).includes(drink[`strIngredient${i}`].toLowerCase())
					) {
						if (this.props.location.state){
							compatibleIngNames.push(drink[`strIngredient${i}`].toLowerCase());
							compatibleIngredients.push(
							this.state.images.find(imageObj => imageObj.name === drink[`strIngredient${i}`].toLowerCase()),			
						);
						}
						else {
							compatibleIngNames.push(drink[`strIngredient${i}`].toLowerCase());
						}
					}
				}
			
				});
				if (!this.props.location.state){this.props.fetchDrinksByIngredient(compatibleIngNames.join(','),
				()=>{compatibleIngredients.push(
				...compatibleIngNames.map(name => ({name, imageURL:
					this.props.ingredients.find(
					ing => ing.name === name
				).strIngredientThumb
				})));
				this.setState({compatibleIngredients});
			}	
			)}
			else {	this.setState({compatibleIngredients});	}
		}

	 componentDidMount() {
		if (this.state.loaded) {
			 this.setDrinks(() => this.setCompatibles());
			
	}
		else {
			let ingNames = this.props.match.params.spirit_name;
			let base = ingNames.split(',')[0];
			this.props.fetchDrinksByIngredient(ingNames,
				()=> {
					this.setState({ingredients: this.props.ingredients});
					this.setState({base: this.props.ingredients.filter(
						ing => ing.name.endsWith(base)
					),
				ingredients: this.props.ingredients.filter(
					ing => !ing.name.endsWith(base))}, 
					() => this.setDrinks(() => this.setCompatibles()))
				
				})
			
		}
	}

	updateIng(ingredientName) {
		return e => {
			this.setState({
				ingredients: this.state.ingredients.concat({ name: ingredientName })
			});
			this.props.history.push(this.props.location.pathname + ',' + ingredientName)
			let newDrinks = this.state.drinks.filter(drink => {
				for (let i = 1; i <= 15; i++) {
					if (!(drink[`strIngredient${i}`] === "" || drink[`strIngredient${i}`] === undefined || drink[`strIngredient${i}`] === null) && (drink[`strIngredient${i}`].toLowerCase() === ingredientName)) {
						return true;
					}
				}
				return false;
			});

			// Filter compatible ingredients and produce new set of results
			let newCompatibles = [];
			newDrinks.forEach(drink => {
				for (let i = 1; i <= 15; i++) {
					if (drink[`strIngredient${i}`] === "" || drink[`strIngredient${i}`] === undefined || drink[`strIngredient${i}`] === null) {
						break;
					} else if (!newCompatibles.concat(this.state.ingredients).concat(this.state.base).map(ci => ci.name).includes(drink[`strIngredient${i}`].toLowerCase()) && drink[`strIngredient${i}`].toLowerCase() !== ingredientName) {
						newCompatibles.push(
							this.state.compatibleIngredients.find(imageObj => imageObj.name === drink[`strIngredient${i}`].toLowerCase())
						);
					}
				}
			});

			this.setState({
				drinks: newDrinks,
				compatibleIngredients: newCompatibles
			})
			this.resetIngCarousel();    // reset scroll position of ingredient carousel
			this.resetDrinkCarousel();  // reset scroll position of drink carousel
		}
	};

	// Remove "Compatible Ingredients" <h1> from page if only 1 potential drink remains
	compatibleIngAmount() {
		return this.state.compatibleIngredients.length ? "byoc-results-ci-header" : "byoc-results-ci-header-dn";
	}

	// Reset the comptabile ingredients carousel to start position
	resetIngCarousel() {
		document.querySelector('.byoc-result-compatible-ingredients').scrollLeft = 0;
	}

	// Reset the potential drinks carousel to start position
	resetDrinkCarousel() {
		document.querySelector('.byoc-result-drinks-carousel').scrollLeft = 0;
	}

	render() {
		if (this.state.drinks) {
			return (
				<div className="byoc-results-container">

					{/* Compatible Ingredients */}
					<div className="byoc-results-compatibles-container">
						<h1 id={ this.compatibleIngAmount() }>Compatible Ingredients</h1>
						<div className={ `byoc-result-compatible-ingredients carousel` }>
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

// TODO: Styling for ingredients carousel
