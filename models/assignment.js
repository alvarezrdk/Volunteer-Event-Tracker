const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Assignment extends Model {}

Assignment.init(
  {
    event_id: {
      type: DataTypes.STRING,
      allowNull: false,
      // references: {
      //   model: "Events"}
    },
    member_id: {
      type: DataTypes.STRING,
      allowNull: false,
      // references: {
      //   model: "Members"}
    },
    event_role: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Assignment',
  }
);

module.exports = Assignment;
