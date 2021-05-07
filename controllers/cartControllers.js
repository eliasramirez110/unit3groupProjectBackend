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

module.exports = cartController