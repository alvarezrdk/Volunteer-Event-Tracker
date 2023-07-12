const { items } = require('../models');

const itemsData = [
  {
    "name": "Vacum",
    "description": "Baterry Vacum",
    "category": "device"
  },
]

const seedItems = () => items.bulkCreate(itemsData);

module.exports = seedItems;