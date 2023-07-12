const { members } = require('../models');

const membersData = [
  {
    "first_name": "Ruben",
    "last_name": "Alvarez",
    "dob": "03/09/1952",
    "gender": "Male",
    "email": "carroz@hotmail.com",
    "password": "password12345"
  }
];

const seedMembers = () => members.bulkCreate(membersData);

module.exports = seedMembers;
