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
     const passwordUser = bcrypt.hashSync("wisnuRizki", bcrypt.genSaltSync(10));
     await queryInterface.bulkInsert('Users', [{
         role_id: 2,
         name: 'wisnu',
         email: 'wisnu@gmail.com',
         password: password,
         address: 'semarang',
         photoUrl: `http://localhost:3000/user/sendPhoto/user1.jpg`,
         createdAt: new Date(),
         updatedAt: new Date()
     },{
      role_id: 1,
      name: 'wisnuRizki',
      email: 'wisnuRizki@gmail.com',
      password: passwordUser,
      address: 'semarang',
      photoUrl: `http://localhost:3000/user/sendPhoto/user2.jpg`,
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
