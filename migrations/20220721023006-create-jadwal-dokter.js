'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JadwalDokters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dokter_id: {
        type: Sequelize.INTEGER
      },
      jadwal_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('JadwalDokters');
  }
};