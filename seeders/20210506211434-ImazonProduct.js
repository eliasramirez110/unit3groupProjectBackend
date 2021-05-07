'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('products', [
      { //product 1
         name: 'Magic iPad',
         description: 'Perfect for your studies at Hogwarts.',
         price: 100000,
         image: 'ipad.png',
         quantity: 100,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      { //product 2
        name: 'Golden iPhone',
        description: 'The only phone for true ballers.',
        price: 3500,
        image: 'iPhoneGold.png',
        quantity: 5000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { //product 3
        name: 'iPokedex23',
         description: 'Device designed to catalogue and provide information regarding various species of Pokémon. Latest version.',
         price: 2500,
         image: 'pokedex.png',
         quantity: 10000,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      { //product 4
        name: 'Tezla flying car',
         description: 'A car that flies. Beware of no fly zones.',
         price: 900000,
         image: 'teslaflyingcar.jpeg',
         quantity: 100,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      { //product 5
        name: 'Hologram projector',
         description: 'Talk to users in real time with a life-sized hologram.',
         price: 20000,
         image: 'hologramprojector.jpeg',
         quantity: 100,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      { //product 6 
        name: 'Tesla Time Machine',
         description: 'Travel back and fourth through specified periods of time.',
         price: 1000000,
         image: 'timeMachine.jpeg',
         quantity: 10,
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
     */ await queryInterface.bulkDelete('products', null, {})
  }
};
