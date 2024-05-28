const express = require('express');
const generateOddNumbers = require('../helpers/generateOddNumbers');

const router = express.Router();

router.get('/odd-numbers/:number', (req, res) => {
  const number = parseInt(req.params.number);
  if (isNaN(number) || number < 1) {
    return res.status(400).send('Invalid number');
  }

  const oddNumbers = generateOddNumbers(number);
  res.json(oddNumbers);
});

module.exports = router;
