const db = require('../config/connection');
const { Items } = require('../models/items');
const cleanDB = require('./cleanDB');

const productNames = require('./productNames');

db.once('open', async () => {

  await cleanDB();

  await Items.insertMany(productNames);

  console.log('Database seeded!');
  process.exit(0);

});
