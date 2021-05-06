const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/userController')

userRouter.post('/signup', userController.create)
userRouter.post('/login', userController.login)
userRouter.delete('/destroy/:id', userController.destroy)

module.exports = userRouter

