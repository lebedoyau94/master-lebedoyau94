function generateOddNumbers(n) {
    let oddNumbers = [];
    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0) {
        oddNumbers.push(i);
      }
    }
    return oddNumbers;
  }
  
  module.exports = generateOddNumbers;