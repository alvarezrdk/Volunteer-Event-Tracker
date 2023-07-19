const sequelize = require('../config/connection');
const membersData = require('./membersData');
const eventsData = require('./eventsData');
const assignmentData = require('./assignmentData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await membersData();

  await eventsData();

  await assignmentData();

  process.exit(0);
};

seedDatabase();
