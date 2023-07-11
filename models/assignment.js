const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class assignment extends Model {}

assignment.init(
  {
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    items_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'assignment',
  }
);

module.exports = assignment;
