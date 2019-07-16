const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Ingredients = require('../../model/Ingredients');

router.get('/', (req, res) => {
  Ingredients.find()
    .sort({ name: 1 })
    .then(ingredients => res.json(ingredients))
    .catch(err => res.status(404).json({ noingredientsfound: 'No ingredients found' }));
});

console.log = console.log.bind(this);

router.get('/:ingredient_name', (req, res) => {
  let name = req.params.ingredient_name.toLowerCase();
  let regexName = name + "$";
  Ingredients.find({
    name: { $regex: regexName }
  })
    .sort({ name: 1 })
    .then(ingredients => res.json(ingredients))
    .catch(err => res.status(404).json({ nodrinksfound: 'No drinks found from that ingredient' }));
});

module.exports = router;