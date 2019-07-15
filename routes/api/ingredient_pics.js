const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const IngredientPic = require('../../model/IngredientPic');

router.get('/', (req, res) => {
  IngredientPic.find()
    .sort({ name: 1 })
    .then(ingredients => res.json(ingredients))
    .catch(err => res.status(404).json({ noingredientsfound: 'No ingredients found' }));
});

module.exports = router;