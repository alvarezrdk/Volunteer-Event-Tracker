const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Assignment extends Model {}

Assignment.init(
  {
    event_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    member_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    items_id: {
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
