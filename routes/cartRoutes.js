const express = require('express')
const cartRouter = express.Router()
const cartController = require('../controllers/cartControllers')

cartRouter.get('/:id/products', cartController.getProducts)


module.exports = cartRouter 