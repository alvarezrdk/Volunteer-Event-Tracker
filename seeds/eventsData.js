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
  {
    "name": "High School Prom",
    "description": "Local high school dance for the students .",
    "date_start": "July 25, 2023",
    "date_end": "July 25, 2023",
    "time_start": "July 20, 2023",
    "time_end": "July 20, 2023",
    "picture": "social_1.png"
  },
  {
    "name": "Food Drive",
    "description": "Handing out food to the less fortunate of our local homeless community.",
    "date_start": "July 25, 2023",
    "date_end": "July 25, 2023",
    "time_start": "July 20, 2023",
    "time_end": "July 20, 2023",
    "picture": "food_1.png"
  },
]

const seedEvents = () => Events.bulkCreate(eventsData);

module.exports = seedEvents;