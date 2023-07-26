const { Members } = require('../models');

const membersData = [
  {
    "first_name": "Ruben",
    "last_name": "Alvarez",
    "birthday": "03/09/1952",
    "gender": "Male",
    "email": "carroz@hotmail.com",
    "password": "password12345",
    "role": "admin",
    "phone_number": "7863529835",
    "location": "33143"
  }
];

const seedMembers = () => Members.bulkCreate(membersData);

module.exports = seedMembers;
