const express = require('express');
const router = express.Router();

// Temp data
const portfolio = [
  { id: 1, name: 'Bitcoin', holdings: '21' },
  { id: 2, name: 'Ethereum', holdings: '100' },
  { id: 3, name: 'EOS', holdings: '1000' },
  { id: 4, name: 'Lisk', holdings: '1000' }
]

// Get the user's portfolio
router.get('/', (req, res) => {
  res.send(portfolio);
});

module.exports = router;
