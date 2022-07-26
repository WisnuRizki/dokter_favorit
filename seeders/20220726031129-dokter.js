'use strict';

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

     await queryInterface.bulkInsert('Dokters', [{
        category_id: 1,
        name: "dokter budi",
        email: "dokterBudi@gmail.com",
        about: "Dokter baik",
        photoUrl: "http://localhost:3000/user/sendPhoto/dokter.png",
        no_hp: 18029348,
        rating: 4,
        price: 10000,
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
