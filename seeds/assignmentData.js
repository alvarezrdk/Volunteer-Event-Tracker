const { assignment } = require('../models');

const assignmentData = [
  {
    "event_id": "1",
    "member_id": "1",
    "items_id": "1",
  },
]

const seedAssignment = () => assignment.bulkCreate(assignmentData);

module.exports = seedAssignment;