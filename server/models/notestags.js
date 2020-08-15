"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NotesTags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotesTags.init(
    {
      note_id: { type: DataTypes.INTEGER, allowNull: false },
      tag_id: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
      sequelize,
      modelName: "NotesTags"
    }
  );
  return NotesTags;
};
