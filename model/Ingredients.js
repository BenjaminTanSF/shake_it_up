const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientsSchema = new Schema({
  name: {
    type: String
  },
  drinks: {
    type: Array
  },
  strIngredientThumb: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = Ingredients = mongoose.model('ingredients', IngredientsSchema);