const Assignment = require('./assignment');
const Events = require('./events');
const Members = require("./members");

// Events.hasMany(Assignment, {
//   foreignKey: 'event_id',
//   onDelete: 'CASCADE'
// });

// Assignment.belongsTo(Events, {
//   foreignKey: 'event_id'
// });

module.exports = { Assignment, Events, Members};
