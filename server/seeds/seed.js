const db = require('../config/connection');
const {items} = require('../models');
const cleanDB = require('./cleanDB');

const techData = require('./techData.json');

db.once('open', async () => {
  await cleanDB('items');

  await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
