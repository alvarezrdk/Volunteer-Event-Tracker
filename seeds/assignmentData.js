const { Assignment } = require('../models');

const assignmentData = [
  {
    "event_id": "1",
    "member_id": "1",
    "event_role": "Passing out garbage bags"
  },
  {
    "event_id": "1",
    "member_id": "1",
    "event_role": "Sorting garbage & recyclable materials into seperate bins"
  },
  {
    "event_id": "1",
    "member_id": "1",
    "event_role": "Project manager"
  },
  {
    "event_id": "1",
    "member_id": "1",
    "event_role": "Attendance taker"
  },
  {
    "event_id": "2",
    "member_id": "1",
    "event_role": "DJ"
  },
  {
    "event_id": "2",
    "member_id": "1",
    "event_role": "Theme planner"
  },
  {
    "event_id": "2",
    "member_id": "1",
    "event_role": "Chaperon"
  },
  {
    "event_id": "2",
    "member_id": "1",
    "event_role": "Food & drink assistant"
  },
  {
    "event_id": "2",
    "member_id": "1",
    "event_role": "Stage announcer"
  },
  {
    "event_id": "3",
    "member_id": "1",
    "event_role": "Project manager"
  },
  {
    "event_id": "3",
    "member_id": "1",
    "event_role": "Handing out canned goods"
  },
  {
    "event_id": "3",
    "member_id": "1",
    "event_role": "Setting up tables"
  },
  {
    "event_id": "3",
    "member_id": "1",
    "event_role": "Unload food from trucks"
  },
  {
    "event_id": "3",
    "member_id": "1",
    "event_role": "Clean up crew"
  },
]

const seedAssignment = () => Assignment.bulkCreate(assignmentData);

module.exports = seedAssignment;