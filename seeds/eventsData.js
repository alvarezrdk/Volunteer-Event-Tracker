const { Events } = require('../models');

const eventsData = [
  {
    "name": "Beach Cleaning",
    "description": "Join us for a rewarding volunteer beach clean-up! Help us protect marine life and preserve the stunning coastline. With gloves and reusable bags in hand, we'll unite as a community to remove litter and plastic waste threatening the delicate ecosystem. Make a difference, connect with like-minded individuals, and create a cleaner, greener tomorrow, one step at a time!",
    "date_start": "July 20, 2023",
    "date_end": "July 20, 2023",
    "time_start": "July 20, 2023",
    "time_end": "July 20, 2023",
    "picture": "Beach Cleanup.jpg"
  },
  {
    "name": "High School Prom",
    "description": "Volunteer as a prom chaperone and be part of an unforgettable night for high school students! Your role is essential in ensuring a safe and enjoyable event. Dance, offer support, and be a friendly presence throughout the evening. Your care and guidance will create lasting memories for the attendees and reassure parents. Join us in making this prom an exceptional experience filled with laughter and camaraderie.",
    "date_start": "July 25, 2023",
    "date_end": "July 25, 2023",
    "time_start": "July 20, 2023",
    "time_end": "July 20, 2023",
    "picture": "social_1.png"
  },
  {
    "name": "Food Drive",
    "description": "Be a beacon of hope in our community! Join our volunteer food drive to combat hunger by collecting and distributing essential supplies to support struggling families. Together, we'll make a tangible difference, fostering a stronger, more caring community where no one goes to bed hungry. Your participation matters – let's unite and be the change we wish to see!",
    "date_start": "July 25, 2023",
    "date_end": "July 25, 2023",
    "time_start": "July 20, 2023",
    "time_end": "July 20, 2023",
    "picture": "food_1.png"
  },
]

const seedEvents = () => Events.bulkCreate(eventsData);

module.exports = seedEvents;