'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.order.belongsTo(models.user)
      models.order.belongsToMany(models.product, { through: 'purchasedProducts' })
    }
  };
  order.init({
    userId: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    orderAddress: DataTypes.STRING,
    orderCity: DataTypes.STRING,
    orderZipcode: DataTypes.STRING,
    cardName: DataTypes.STRING,
    cardNumber: DataTypes.STRING,
    expDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};