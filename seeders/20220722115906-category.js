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
     await queryInterface.bulkInsert('Categories', [{
      category: 'jantung & paru',
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      category: 'spesialis anak',
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      category: 'spesialis kulit',
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      category: 'spesialis penyakit dalam',
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
