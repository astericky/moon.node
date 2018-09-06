const express = require('express');
const router = express.Router();

// Temp data
const coins = [
  { id: 1, name: 'Bitcoin' },
  { id: 2, name: 'Ethereum' },
  { id: 3, name: 'Ripple' }
]

// Get top 1000 coins
// https://p.nomics.com/cryptocurrency-bitcoin-api/
router.get('/', (req, res) => {
  res.send(coins);
});

module.exports = router;
