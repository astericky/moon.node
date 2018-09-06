const express = require('express');
const main = express.Router();

main.get('/', (req, res) => {
  res.send('MOON.NODE coming soon...');
});

module.exports = main;
