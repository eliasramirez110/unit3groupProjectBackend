const models = require('../models')

const cartController = {}

cartController.getProducts = async (req, res) => {
    try {
        const cart = await models.cart.findOne({
            where: {
                id: req.params.id
            }
        })
        const products = await cart.getProducts()

        res.json({ products })
    } catch (error) {
        res.json({ error })
    }
}

cartController.removeProduct = async (req, res) => {
    try {
        const cart = await models.cart.findOne({
            where: {
                id: req.params.id
            }
        })

        const product = await models.product.findOne({
            where: {
                id: req.params.productId
            }
        })

        await cart.removeProduct(product)

        res.json({ cart })
    } catch (error) {

    }
}

module.exports = cartController