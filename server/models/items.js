const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
  _id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const Items = model('Items', itemSchema); // Use singular name for the model
module.exports = Items;
