const express = require('express');
const router = express.Router();

// Route to get all cold storage data
router.get('/cold-storage', (req, res) => {
  res.send('Admin - Get cold storage data');
});

// Route to get market information
router.get('/market-info', (req, res) => {
  res.send('Admin - Get market information');
});

// Export the router
module.exports = router;
