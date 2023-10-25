const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Comment extends Model {}

Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      comment_text: {
        type: DataTypes.STRING(500),
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
      modelName: 'comment',
    }
  );


module.exports = Post;