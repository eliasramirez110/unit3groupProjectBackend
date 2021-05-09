const express = require('express')
const cartRouter = express.Router()
const cartController = require('../controllers/cartControllers')

cartRouter.get('/:id/products', cartController.getProducts)
cartRouter.delete('/:id/products/:productId', cartController.removeProduct)

module.exports = cartRouter 