'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('product', [
      {
         name: 'iPad',
         description: 'info about product',
         price: 'INTEGER',
         image: 'image',
         quantity: 100,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: 'iPhone',
        description: 'info about product',
        price: 'INTEGER',
        image: 'image',
        quantity: 'INTEGER',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ipad',
         description: 'info about product',
         price: 'INTEGER',
         image: 'image',
         quantity: 'INTEGER',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: 'ipad',
         description: 'info about product',
         price: 'INTEGER',
         image: 'image',
         quantity: 'INTEGER',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: 'ipad',
         description: 'info about product',
         price: 'INTEGER',
         image: 'image',
         quantity: 'INTEGER',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        name: 'ipad',
         description: 'info about product',
         price: 'INTEGER',
         image: 'image',
         quantity: 'INTEGER',
         createdAt: new Date(),
         updatedAt: new Date()
      }
     ])  

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
