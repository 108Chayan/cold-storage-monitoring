const express = require('express');
const router = express.Router();

// Route to get list of products
router.get('/products', (req, res) => {
  res.send('Consumer - Get list of products');
});

// Route to view product details
router.get('/product/:id', (req, res) => {
  res.send(`Consumer - Get details of product with ID ${req.params.id}`);
});

// Export the router
module.exports = router;
