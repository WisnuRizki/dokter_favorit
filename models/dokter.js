'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dokter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Appointment,{
        foreignKey: "id",
				as: "dokters",
      })

      this.belongsTo(models.Category,{
        foreignKey: 'category_id',
        as: 'category'
      })
    }
  }
  Dokter.init({
    category_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    about: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    no_hp: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dokter',
  });
  return Dokter;
};