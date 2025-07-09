const express = require('express');
const { cart, addCart, updateCart, payment } = require('../controllers/cart.controller');
const router = express.Router();



//route to get cart
router.get('/userCart',cart)
router.post('/add',addCart);
router.put("/update", updateCart);
router.post("/payment",payment);


module.exports = router;
