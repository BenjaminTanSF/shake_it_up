const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const DrinkDetail = require('../../model/DrinkDetail');

router.get('/', (req, res) => {
  DrinkDetail.find()
    .sort({ strDrink: 1 })
    .then(drinks => res.json(drinks))
    .catch(err => res.status(404).json({ nodrinksfound: 'No drinks found' }));
});

router.get('/:drink_id', (req, res) => {
  DrinkDetail.find({ idDrink: req.params.drink_id })
    .sort({ strDrink: 1 })
    .then(drinks => res.json(drinks))
    .catch(err => res.status(404).json({ nodrinksfound: 'No drinks found from that id' }));
});

module.exports = router;