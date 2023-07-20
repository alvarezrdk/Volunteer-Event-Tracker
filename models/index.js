const Assignment = require('./Assignment');
const Events = require('./Events');
const Members = require("./members");

// Events.hasMany(Assignment, {
//   foreignKey: 'event_id',
//   onDelete: 'CASCADE'
// });

// Assignment.belongsTo(Events, {
//   foreignKey: 'event_id'
// });

module.exports = { Assignment, Events, Members};
