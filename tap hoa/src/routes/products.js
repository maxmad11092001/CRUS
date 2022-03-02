const express = require('express');
const route = express.Router();
const productsController = require('../controller/products')

route.get('/', productsController.index);
route.get('/category', productsController.categories);

module.exports = route