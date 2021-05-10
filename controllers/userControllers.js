const models = require('../models')
const user = require('../models/user')

const userController = {}

userController.create = async (req, res) => {
  try {
    const user = await models.user.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      userAddress: req.body.address,
      userCity: req.body.city,
      userZipCode: req.body.zipCode,
      cardName: req.body.cardName,
      cardNumber: req.body.cardNumber,
      expDate: req.body.expDate,
    })
    res.json({ user })
  } catch (error) {
    res.json({ error })
  }
}

userController.login = async (req, res) => {
  try {
    const user = await models.user.findOne({
      where: {
        email: req.body.email
      }
    })
    if (user.password === req.body.password) {
      res.json({
        user
      })
    }
  } catch (error) {
    res.json({ error })
  }
}

userController.update = async (req, res) => {
  try {
    const oldUser = await models.user.findOne({
      where: {
        id: req.params.id
      }
    })

    const user = await oldUser.update(req.body)
    res.json({
      user
    })
  } catch (error) {
    res.json({ error })
  }
}

userController.destroy = async (req, res) => {
  try {
    const user = await models.user.findOne({
      where: {
        id: req.params.id //will change later to headers?
      }
    })
    const destroyUser = await user.destroy()
    res.json({ destroyUser })
  } catch (error) {
    res.json({ error })
  }
}

userController.verify = async (req, res) => {
  const userId = req.params.userId

  if (userId) {
    try {
      const user = await models.user.findOne({
        where: {
          id: userId
        }
      })
      res.json({
        user
      })
    } catch (error) {
      res.status(404).json({ message: 'user not found.' })
    }
  }
  else {
    res.status(400).json({ message: 'user not found.' })
  }
}

userController.addToCart = async (req, res) => {

  const userId = req.params.id
  console.log(userId);

  if (userId) {
    try {
      // Get the user
      const user = await models.user.findOne({
        where: {
          id: userId
        }
      })

      // Get user's cart
      let cart = await user.getCart()

      // If the user has no cart, create one
      if (!cart) {
        cart = await user.createCart()
      }

      const product = await models.product.findOne({
        where: {
          id: req.body.productId
        }
      })
      // add product to the cart
      cart.addProduct(product)

      res.json({ cart, product })
    } catch (error) {
      console.log(error)
    }
  }
  else {
    res.json({ message: 'Id is required.' })
  }
}



module.exports = userController