'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Dokter,{
        foreignKey: "dokter_id",
				as: "dokter",
      })

      this.hasMany(models.Payment,{
        foreignKey: 'appointment_id',
        as: 'payment'
      })
    }
  }
  Appointment.init({
    user_id: DataTypes.INTEGER,
    dokter_id: DataTypes.INTEGER,
    symptoms: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};