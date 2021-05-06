const express = require('express')
const purchaseRouter = express.Router()
const purchaseController = require('../controllers/purchasesController')

purchaseRouter.post('/create', purchaseController.create)
purchaseRouter.get('/getsneaker', purchaseController.store)
module.exports = purchaseRouter 

//purchase route

