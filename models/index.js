const Assignment = require('./Assignment');
const Events = require('./Events');
const Items = require('./Items');
const Members = require("./Members");

Events.hasMany(Assignment, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});

Assignment.belongsTo(Events, {
  foreignKey: 'id'
});

module.exports = { Assignment, Events, Members};
