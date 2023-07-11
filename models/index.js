const assignment = require('./assignment');
const events = require('./events');

assignment.hasMany(events, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});

events.belongsTo(User, {
  foreignKey: 'id'
});

module.exports = { assignment, events };
