// 'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Posts, {
        onDelete: 'CASCADE', onUpdate: 'CASCADE' }, { foreignKey: 'userId' });
    }
  }
  Users.init(
    {
      displayName: DataTypes.TEXT,
      email: {
        type: DataTypes.TEXT,
        unique: true,
      },
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Users',
    },
  );
  return Users;
};

// [
//   https://app.betrybe.com/course/back-end/orm/introduction/conteudos/sequelize?use_case=side_bar

//   [Trybe] Vinicius Vasconcelos para Todos (1:55 PM)
// https://app.betrybe.com/course/back-end/orm/associations/conteudos/eager-loading?use_case=side_bar
// ]
