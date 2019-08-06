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

router.get('/:ingredient_name', (req, res) => {
  let spaceCorrected = req.params.ingredient_name.split('%20').join(' '); 
  let arr = spaceCorrected.toLowerCase().split(',');
  let parensArr = arr.map((ele, idx) => 
  idx ? '(^'+ ele + '$)' : '('+ ele + '$)');
  let regexQuery = parensArr.join('|');
  Ingredients.find({
    name: { $regex: regexQuery }
  })
    .sort({ name: 1 })
    .then(ingredients => res.json(ingredients))
    .catch(err => res.status(404).json({ nodrinksfound: 'No drinks found from that ingredient' }));
});

module.exports = router;