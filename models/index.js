const assignment = require('./assignment');
const events = require('./events');
const items = require('./items');
const members = require("./members");

events.hasMany(assignment, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});

assignment.belongsTo(events, {
  foreignKey: 'id'
});

module.exports = { assignment, events, members, items };
