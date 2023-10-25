const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Post extends Model {}

Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      subject: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      comment: {
        type: DataTypes.STRING(5000),
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
            unique: false
        },
      },

    },
    {
      sequelize,      
      freezeTableName: true,
      underscored: true,
      modelName: 'post',
    }
  );


module.exports = Post;