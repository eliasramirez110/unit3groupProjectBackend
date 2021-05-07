'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    queryInterface.addColumn('users', 'cardName', {
      type: Sequelize.STRING
    }),
      queryInterface.addColumn('users', 'cardNumber', {
        type: Sequelize.STRING,
      })
    queryInterface.addColumn('users', 'expDate', {
      type: Sequelize.STRING,
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeColumn('users', 'cardName'),
      queryInterface.removeColumn('users', 'cardNumber'),
      queryInterface.removeColumn('users', 'expDate')
  }
};
