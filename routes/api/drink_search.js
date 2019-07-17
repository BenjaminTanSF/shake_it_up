const express = require('express');
const router = express.Router();

const DrinkDetail = require('../../model/DrinkDetail');

router.get('/:drink_name', (req, res) => {
  let name = req.params.drink_name;
  let regexName = name + "$";
  DrinkDetail.find({
    strDrink: { $regex: name, $options: 'i' }
  })
    .sort({ strDrink: 1 })
    .then(drinks => res.json(drinks))
    .catch(err => res.status(404).json({ nodrinksfound: 'No drinks found from that query' }));
});

module.exports = router;