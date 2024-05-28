const express = require('express');

const router = express.Router();

router.get('/nomenclature', (req, res) => {
  const updatedCode = `
function calculateSineOfProductSum(firstNumber, secondNumber, multiplier) {
  let sum = firstNumber + secondNumber;
  let product = sum * multiplier;
  let sineValue = Math.sin(product);
  return sineValue;
}
  `;
  res.send(`<pre>${updatedCode}</pre>`);
});

module.exports = router;
