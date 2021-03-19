// 'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    static associate(models) {
      Posts.belongsTo(models.Users, { foreignKey: 'userId' },
        {
          foreignKey: 'userId',
        });
    }
  }
  Posts.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Posts',
    },
  );
  return Posts;
};
