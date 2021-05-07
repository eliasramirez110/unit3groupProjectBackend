const express = require('express')
const orderRouter = express.Router()
const orderController = require('../controllers/orderControllers')

orderRouter.post('/', orderController.placeOrder)
orderRouter.get('/', orderController.getUserOrders)

module.exports = orderRouter 