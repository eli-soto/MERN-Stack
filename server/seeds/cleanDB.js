const models = require('../models');
const db = require('../config/connection');

module.exports = mongoose.connect('mongodb://localhost:27017/your_database', { useNewUrlParser: true, useUnifiedTopology: true })
.then(async () => {
  console.log('Connected to MongoDB');

  // Delete all products from the database
  await Product.deleteMany();

  console.log('Database cleaned successfully');
})
.catch(err => console.error('Error connecting to MongoDB:', err));
