const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientPicSchema = new Schema({
  name: {
    type: String
  },
  imageURL: {
    type: Array
  }
});

module.exports = IngredientPic = mongoose.model('ingredientpics', IngredientPicSchema);