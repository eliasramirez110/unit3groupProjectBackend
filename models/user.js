'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasOne(models.cart)
      models.user.hasMany(models.order)
    }
  };
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    userAddress: DataTypes.STRING,
    userCity: DataTypes.STRING,
    userZipcode: DataTypes.STRING,
    cardName: DataTypes.STRING,
    cardNumber: DataTypes.STRING,
    expDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};