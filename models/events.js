const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Events extends Model {}

Events.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    date_start: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_end: {
      type: DataTypes.STRING,
    },
    time_start: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time_end: {
      type: DataTypes.STRING,
    },
    picture: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Events',
  }
);

module.exports = Events;
