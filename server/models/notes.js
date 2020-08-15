"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notes.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNULL: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNULL: false
      },
      picUrl: {
        type: DataTypes.STRING,
        allowNULL: false
      },
      resultText: {
        type: DataTypes.STRING,
        allowNull: false
      },
      comment: { type: DataTypes.STRING },
      review: { type: DataTypes.BOOLEAN }
    },
    {
      sequelize,
      modelName: "Notes"
    }
  );
  return Notes;
};
