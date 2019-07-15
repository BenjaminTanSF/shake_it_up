const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrinksByLowerCaseIngredientSchema = new Schema({
  name: {
    type: String
  },
  drinks: {
    type: Array
  }
});

module.exports = DrinksByLowerCaseIngredient = mongoose.model('drinksbylowercaseingredients', DrinksByLowerCaseIngredientSchema);