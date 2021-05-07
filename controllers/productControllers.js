const models = require('../models')

const productController = {}

productController.getAll = async (req, res) => {
    try {
        const products = await models.product.findAll()
        res.json({ products })
    } catch (error) {
        res.json({ error })
    }
}


productController.getOne = async (req, res) => {
    try {
        const product = await models.product.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({ product })
    } catch (error) {
        res.json({ error })
    }
}



module.exports = productController