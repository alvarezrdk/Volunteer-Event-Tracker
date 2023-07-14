const { Assignment } = require('../models');

const assignmentData = [
  {
    "event_id": "1",
    "member_id": "1",
    "items_id": "1",
  },
]

const seedAssignment = () => Assignment.bulkCreate(assignmentData);

module.exports = seedAssignment;