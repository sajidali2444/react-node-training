const express = require('express');
const customerController = require('../controllers/customerController');
const customerRoutes = express.Router();
//const { getAllCustomers, getCustomerById } = customerController;
customerRoutes.route('/customers').get(customerController.getAllCustomers);
customerRoutes.route('/customers/:id').get(customerController.getById);

module.exports = customerRoutes;
