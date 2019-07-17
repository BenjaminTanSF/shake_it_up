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
        })

        this.setState({
            drinks,
            compatibleIngredients
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className="byoc-results-container">

            </div>
        );
    }

}

export default BYOCResults;

