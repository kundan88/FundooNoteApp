'use strict';
const { string, boolean } = require('@hapi/joi');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  note.init(
    {
      Title:DataTypes.STRING,
      Description:DataTypes.STRING,
      Color:DataTypes.STRING,
      
      isArchive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        },
        isTrash: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        }
      
    },
    {
      sequelize,
      modelName: 'note'
    }
  );
  return note;
};
