const models = require('../models')

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
    res.json({user})
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

module.exports = userController