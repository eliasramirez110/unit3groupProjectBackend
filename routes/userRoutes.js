const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/userControllers')

userRouter.post('/signup', userController.create)
userRouter.post('/login', userController.login)
userRouter.put('/:id', userController.update)
userRouter.delete('/destroy/:id', userController.destroy)
userRouter.post('/:id/addToCart', userController.addToCart)
userRouter.get('/verify/:userId', userController.verify)

module.exports = userRouter

