const { Events } = require('../models');

const eventsData = [
  {
    "name": "Beach Cleaning",
    "description": "Full day shaping the beach collecting garbage.",
    "date_start": "July 20, 2023",
    "date_end": "July 20, 2023",
    "time_start": "July 20, 2023",
    "time_end": "July 20, 2023",
    "picture": "cleaning_1.png"
  },
]

const seedEvents = () => Events.bulkCreate(eventsData);

module.exports = seedEvents;