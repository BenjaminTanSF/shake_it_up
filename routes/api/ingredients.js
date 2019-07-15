const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const DrinksByLowerCaseIngredient = require('../../model/DrinksByLowerCaseIngredient');

router.get('/', (req, res) => {
  DrinksByLowerCaseIngredient.find()
    .sort({ idDrink: 1 })
    .then(ingredients => res.json(ingredients))
    .catch(err => res.status(404).json({ noingredientsfound: 'No ingredients found' }));
});

router.get('/:ingredient_name', (req, res) => {
  DrinksByLowerCaseIngredient.find({
    idDrink: req.params.ingredient_name
  })
    .sort({ idDrink: 1 })
    .then(drinks => res.json(drinks))
    .catch(err => res.status(404).json({ nodrinksfound: 'No drinks found from that id' }));
});

module.exports = router;