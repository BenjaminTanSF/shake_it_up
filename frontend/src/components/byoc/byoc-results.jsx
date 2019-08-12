import React from 'react';
import { Link } from 'react-router-dom';
import byocStyles from '../../styles/discover/byoc.scss'

class BYOCResults extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			base: [],
			nonBaseIngredients: [],
			drinks: [],
			compatibleIngredients: []
		}
		this.updateIngredients = this.updateIngredients.bind(this);
		this.compatibleIngAmount = this.compatibleIngAmount.bind(this);
		this.resetIngCarousel = this.resetIngCarousel.bind(this);
		this.resetDrinkCarousel = this.resetDrinkCarousel.bind(this);
	}

	//Local state (base, nonBaseIngredients, drinks, compatibleIngredients)
	//is set by setStateFromURL.
	//The 'base' array stores POJOs corresp. to the various types 
	//(e.g., white rum, spiced rum,...)
	//of the base spirit selected by the user (e.g. rum). After selecting
	//the base spirit, the 'drinks' array is set to be all cocktails containing
	//any of the types of the given base spirit, and the 'compatible ingredients'
	//is initialized as all ingredients of these drinks except for 
	//the ones in 'base'.
	//The user then may then select additional ingredients (nonBaseIngredients) 
	//which refines (usually reduces, and never enlarges) the array of drinks 
	//and correspondingly refines the list of compatible ingredients.

	componentDidMount() {
		this.setStateFromURL();
	}

	//Set local state (base, nonBaseIngredients, drinks, compatibleIngredients),
	//based on the URL wildcard.
	//Since base spirit is the first selection
	//made by the user, the name of the base spirit is the first segment
	//of the (comma-separated) wildcard. So if the wildcard is 'vodka, lime', 
	//setStateFromURL sets base to be 
	//[{name: 'vodka', drinks: [{strDrink: 'Bloody Mary',...},...],...}, 
	//{name: 'lemon vodka',...}...].
	//It also sets nonBaseIngredients to be (in this case an array of length 1) 
	//[{name: 'lime', drinks: [{strDrink: 'Bloody Mary',...},...]...}]. 
	//The 'drinks' slice of state is set to the array of cocktails which each 
	//contains some version of the base spirit, and also every one of the 
	//non-base ingredients. (Thus, when the user makes their initial selection,
	//namely base spirit, they see all the drinks containing some version of it,
	//and subsequent clicks on ingredients reduce the list of cocktails.) 
	//Lastly, the compatibleIngredients array stores 
	//all ingredients that go into any cocktail in the drinks array, except for
	//the ingredients that have already been selected.  

	setStateFromURL() {
		//Grab the last part of the url path. (The 'ingredients' key is
		//specified in the App component.)

		let ingNames = this.props.match.params.ingredients; 
		let ingNamesArr = ingNames.split(',');
		let [baseString, nonBaseIngStrings] = [ingNamesArr[0], ingNamesArr.slice(1)];

		//Fetch ingredients (each holding a 'drinks' array of cocktails) from db. 
		//Since setState can be asynchronous, 
		//we pass into setState a second argument of a callback
		//that sets the local 'drinks' state, and then 
		//the local 'compatibleIngredients' state (again via a callback, now passed
		//into the setDrinks function).

		this.props.fetchDrinksByIngredient(ingNames,
			() => {
				this.setState({
					base: this.props.ingredients.filter(
						ing => ing.name.endsWith(baseString)
					),
					nonBaseIngredients: this.props.ingredients.filter(
						ing => nonBaseIngStrings.includes(ing.name) && !ing.name.endsWith(baseString))
				},
					() => this.setDrinks(() => this.setCompatibles()))
			})
	}

	//Sets the 'drinks' slice of local state, based on the ingredients which have
	//been selected by the user so far-- the 'base' and 'nonBaseIngredients' 
	//slices of state. While the 'base' ingredients produce the original array of drinks,
	//the 'nonBaseIngredients' refine it so that the user hones in on a smaller
	//and smaller array of choices.

	setDrinks(cb) {
		let drinks = [];
		this.state.base.forEach(baseIngB => {
			baseIngB.drinks.forEach(drinkWithBaseIngB => {
				if (!drinks.map(d => d.strDrink).includes(drinkWithBaseIngB.strDrink)
					&& this.state.nonBaseIngredients.every(
						nonBaseIng =>
							nonBaseIng.drinks.map(
								dr => dr.strDrink).includes(drinkWithBaseIngB.strDrink)
					)) {
					drinks.push(drinkWithBaseIngB);
				}
			})
		});

		this.setState({
			drinks
		}, cb);
	}

	//Sets the compatibleIngredients slice of local state, which will be
	//(a particular ordering of) the ingredients which occur in any drink 
	//in the 'drinks' slice of state, except for the already selected ingredients,
	//i.e. the ingredients in the 'base' and 'nonBaseIngredients' slices of state.
	//Orders the compatible ingredients in descending order of 
	//'popularity'--popularity meaning the number of relevant drinks 
	//in the 'drinks' slice of state.
	setCompatibles() {
		let drinks = this.state.drinks;
		//First gather the names of selected ingredients,
		//to form a boolean-valued POJO that is quickly checked.
		let selectedIngreds = this.state.nonBaseIngredients.concat(
			this.state.base).map(ing => ing.name);
		const alreadySelected = {}; 
		selectedIngreds.forEach(ing => alreadySelected[ing] = true);

		let compatibleIngredients = [];

		//The compatibleIngredients will be sorted in decreasing order 
		//by number of relevant cocktails in this.state.drinks.
		//Store these numbers in the following POJO.

		const compatIngsNumDrinks = {};
		let maxNumDrinks = 0;

		drinks.forEach((drink) => {
			for (let i = 1; i <= 15; i++) {
				let drinkIng = drink[`strIngredient${i}`];
				if (!drinkIng) {
					break;
				}
				drinkIng = drinkIng.toLowerCase();
				if (!alreadySelected[drinkIng]) {
					let prevCount = compatIngsNumDrinks[drinkIng] || 0;
					compatIngsNumDrinks[drinkIng] = prevCount + 1;
					maxNumDrinks = Math.max(maxNumDrinks, prevCount + 1);
				}
			}
		});
		//Now the keys of compatIngsNumDrinks are the names of the ingredients
		//for compatibleIngredients, and the values are the numbers 
		//they are to be sorted by (in desc. order). Next obtain 
		//the desired ordering by iterating through the POJO, placing keys into 
		//buckets according to their corresponding values, and flattening the result.

		const compatIngsBuckets = new Array(maxNumDrinks);
		Object.entries(compatIngsNumDrinks).forEach(
			entry => {
				let bucketNumber = maxNumDrinks - entry[1];
				if (!compatIngsBuckets[bucketNumber]) {
					compatIngsBuckets[bucketNumber] = [];
				}
				compatIngsBuckets[bucketNumber].push(entry[0]);
			}
		)
		let sortedIngNames = compatIngsBuckets.flat();

		//Finally, map the sortedIngNames to POJOs
		//with image URLs, and sets local state. To get the image URLs,
		// fetch from db if necessary, which updates the redux state and therefore
		// this.props, via the byoc container component.

		this.props.fetchDrinksByIngredient(sortedIngNames.join(','),
			() => {
				compatibleIngredients.push(
					...sortedIngNames.map(name => ({
						name, imageURL:
							this.props.ingredients.find(
								ing => ing.name === name
							).strIngredientThumb
					})));
				this.setState({ compatibleIngredients });
			}
		)
	}

	//The componentDidUpdate function triggers, for e.g., whenever the URL wildcard
	//updates. In this case it checks if the ingredients in local state
	//match with the wildcard; if not, it invokes setStateFromURL.
	componentDidUpdate() {
		let wildcardIngredients = this.props.match.params.ingredients;
		let numWildcardNonBaseIngredients = wildcardIngredients.split(',').slice(1).length;
		let ingArr = wildcardIngredients.split(',');
		let singleBase = ingArr[0];
		let nonBaseIngs = ingArr.slice(1).map(
			ingName => ingName.split('%20').join(' ')
		);
		let stateNBIngs = this.state.nonBaseIngredients;
		if (numWildcardNonBaseIngredients !== this.state.nonBaseIngredients.length) {
			return this.setStateFromURL();
		}
		for (let i = 0; i < stateNBIngs.length; i++) {
			if (!nonBaseIngs.includes(stateNBIngs[i].name)) {
				return this.setStateFromURL();
			}
		}
		if (!this.state.base.map(ing => ing.name).includes(
			singleBase
		)) {
			this.setStateFromURL();
		}

	}

	//The following is the click handler for when the user clicks on a 
	//new ingredient. It updates the nonBaseIngredients slice of local state,
	//and concatenates the new ingredient's name into the url wildcard.
	//It then filters out the drinks that do not contain the new ingredient,
	//and updates the 'drinks' and 'compatibleIngredients' slices of state
	//accordingly.

	updateIngredients(ingredientName) {
		return e => {
			//update the URL wildcard:
			this.props.history.push(this.props.location.pathname + ',' + ingredientName)

			this.setState({
				nonBaseIngredients: this.state.nonBaseIngredients.concat({ name: ingredientName })
			});
			//filter the drinks slice of state; store result temporarily as newDrinks
			let newDrinks = this.state.drinks.filter(drink => {
				for (let i = 1; i <= 15; i++) {
					if (drink[`strIngredient${i}`] && (drink[`strIngredient${i}`].toLowerCase() === ingredientName)) {
						return true;
					}
				}
				return false;
			});

			// Filter compatible ingredients; store result temporarily as newCompatibles
			let newCompatibles = [];
			newDrinks.forEach(drink => {
				for (let i = 1; i <= 15; i++) {
					if (!drink[`strIngredient${i}`]) {
						break;
					} else if (!newCompatibles.concat(this.state.nonBaseIngredients).concat(this.state.base).map(ci => ci.name).includes(drink[`strIngredient${i}`].toLowerCase()) && drink[`strIngredient${i}`].toLowerCase() !== ingredientName) {
						newCompatibles.push(
							this.state.compatibleIngredients.find(imageObj => imageObj.name === drink[`strIngredient${i}`].toLowerCase())
						);
					}
				}
			});
			//Set state.
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
						<h1 id={this.compatibleIngAmount()}>Compatible Ingredients</h1>
						<div className={`byoc-result-compatible-ingredients carousel`}>
							{this.state.compatibleIngredients.map(ingredient => {
								let fileName = ingredient.imageURL.slice(82, (ingredient.imageURL.length - 9))
								return (
									<div style={{ "background-image": `url('${process.env.PUBLIC_URL + `/images/${fileName}'`})` }} className="byoc-result-compatible-card" key={ingredient.name} onClick={this.updateIngredients(ingredient.name)}>
										<span className="byoc-ing-name">{ingredient.name}</span>
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

