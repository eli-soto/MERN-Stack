const { Schema, model } = require('mongoose');

const techSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const productSchema = model('Tech', techSchema);

module.exports = Tech;
