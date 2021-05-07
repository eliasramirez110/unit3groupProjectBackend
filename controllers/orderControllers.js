const models = require('../models')

const orderController = {}

orderController.placeOrder = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.headers.authorization
            }
        })
        const cart = await models.cart.findOne({
            where: {
                id: req.body.cartId
            }
        })
        const products = await cart.getProducts()

        const total = products.reduce((accumulator, currentProduct) => {
            return parseFloat(accumulator.price) + parseFloat(currentProduct.price)
        })

        const order = await models.order.create({
            total: total,
            orderAddress: user.userAddress,
            orderCity: user.userCity,
            orderZipcode: user.userZipcode,
            cardName: user.cardName,
            cardNumber: user.cardNumber,
            expDate: user.expDate
        })

        await user.addOrders(order)
        await order.reload()

        //remove items from the cart
        await cart.removeProducts(products)
        // delete/empty the cart
        await cart.destroy()

        res.json({ order })
    } catch (error) {
        res.json({ error })
    }
}

orderController.getUserOrders = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.headers.authorization
            }
        })

        const orders = await user.getOrders()
        res.json({ orders })
    } catch (error) {
        res.json({ error })
    }
}

module.exports = orderController