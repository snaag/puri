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
        primaryKey: true
      },
      user_id: DataTypes.INTEGER,
      picUrl: DataTypes.STRING,
      resultText: DataTypes.STRING,
      comment: DataTypes.STRING,
      review: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: "Notes"
    }
  );
  return Notes;
};
