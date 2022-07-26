'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Role,{
        foreignKey: 'role_id',
        as: 'role'
      })
    }
  }
  User.init({
    role_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    photoUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};