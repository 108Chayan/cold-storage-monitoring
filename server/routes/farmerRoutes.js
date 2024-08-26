const express = require('express');
const router = express.Router();

// Route to get nearby markets
router.get('/markets', (req, res) => {
  res.send('Farmer - Get nearby markets');
});

// Route to find cold storage options
router.get('/cold-storage', (req, res) => {
  res.send('Farmer - Get nearby cold storage options');
});

// Export the router
module.exports = router;
