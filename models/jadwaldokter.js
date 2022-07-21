'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JadwalDokter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JadwalDokter.init({
    dokter_id: DataTypes.INTEGER,
    jadwal_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JadwalDokter',
  });
  return JadwalDokter;
};