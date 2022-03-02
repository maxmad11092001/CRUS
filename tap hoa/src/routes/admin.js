const express = require('express');
const route = express.Router();
const adminController = require('../controller/admin')

route.get('/', adminController.index);
route.get('/admin', adminController.index);
route.get('/add_user', adminController.add_user);

module.exports = route