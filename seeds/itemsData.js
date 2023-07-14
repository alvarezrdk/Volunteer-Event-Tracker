const { Items } = require('../models');

const itemsData = [
  {
    "name": "Vacum",
    "description": "Baterry Vacum",
    "category": "device"
  },
]

const seedItems = () => Items.bulkCreate(itemsData);

module.exports = seedItems;