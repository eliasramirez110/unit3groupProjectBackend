const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/productControllers')

productRouter.get('/', productController.getAll)
productRouter.get('/:id', productController.getOne)

module.exports = productRouter 