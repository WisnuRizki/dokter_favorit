'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     const password = bcrypt.hashSync("ADMINimbd", bcrypt.genSaltSync(10));
     await queryInterface.bulkInsert('Users', [{
         role_id: 1,
         name: 'wisnu',
         email: 'wisnu@gmail.com',
         password: password,
         address: 'semarang',
         photoUrl: 'user1.jpg',
         createdAt: new Date(),
         updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
