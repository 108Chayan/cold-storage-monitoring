const express = require('express');
const router = express.Router();

// Route to get storage details
router.get('/storage-details', (req, res) => {
  res.send('Cold Storage Owner - Get storage details');
});

// Route to get market demand
router.get('/market-demand', (req, res) => {
  res.send('Cold Storage Owner - Get market demand');
});

// Export the router
module.exports = router;
