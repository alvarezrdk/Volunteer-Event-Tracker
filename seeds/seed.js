const sequelize = require('../config/connection');
const membersData = require('./membersData');
const eventsData = require('./eventsData');
const assignmentData = require('./assignmentData');
// const itemsData = require('./itemsData');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await membersData();

  await eventsData();

  // await itemsData();

  await assignmentData();

  process.exit(0);
};

seedDatabase();
