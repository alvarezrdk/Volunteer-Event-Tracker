const { Events } = require('../models');

const eventsData = [
  {
    "name": "Beach Clean Up",
    "description": "Join us for a rewarding volunteer beach clean-up! Help us protect marine life and preserve the stunning coastline. With gloves and reusable bags in hand, we'll unite as a community to remove litter and plastic waste threatening the delicate ecosystem. Make a difference, connect with like-minded individuals, and create a cleaner, greener tomorrow, one step at a time!",
    "date_start": "2023-07-20",
    "date_end": "2023-07-20",
    "time_start": "2023-07-20T07:00",
    "time_end": "2023-07-20T11:00",
    "picture": "Beach Cleanup.jpg"
  },
  {
    "name": "Prom Chaperone",
    "description": "Volunteer as a prom chaperone and be part of an unforgettable night for high school students! Your role is essential in ensuring a safe and enjoyable event. Dance, offer support, and be a friendly presence throughout the evening. Your care and guidance will create lasting memories for the attendees and reassure parents. Join us in making this prom an exceptional experience filled with laughter and camaraderie.",
    "date_start": "2023-07-23",
    "date_end": "2023-07-23",
    "time_start": "2023-07-23T18:00",
    "time_end": "2023-07-23T22:00",
    "picture": "social_1.png"
  },
  {
    "name": "Food Drive",
    "description": "Be a beacon of hope in our community! Join our volunteer food drive to combat hunger by collecting and distributing essential supplies to support struggling families. Together, we'll make a tangible difference, fostering a stronger, more caring community where no one goes to bed hungry. Your participation matters – let's unite and be the change we wish to see!",
    "date_start": "2023-07-25",
    "date_end": "2023-07-25",
    "time_start": "2023-07-25T08:00",
    "time_end": "2023-07-25T17:00",
    "picture": "food_1.png"
  },
  {
    "name": "Animal Shelter Support",
    "description": "Volunteering your time and love can make a big difference in the lives of these animals, providing essential care and helping them find forever homes. Every moment spent at the shelter is filled with joy and fulfillment as you witness the positive impact you're making. Join us in creating a compassionate community for these furry friends and consider becoming a volunteer today!",
    "date_start": "2023-07-27",
    "date_end": "2023-07-27",
    "time_start": "2023-07-27T10:00",
    "time_end": "2023-07-27T18:00",
    "picture": "AnimalShelter.jpg"
  }
]

const seedEvents = () => Events.bulkCreate(eventsData);

module.exports = seedEvents;