const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
  item1: {
    id:{
      id:1,
      type: Number,
      required: true
    },
    name: {
      name:"Shoes1",
      type: String,
      required: true,
    },
    price: {
      price: 100,
      type: Number,
      path: 'item1.price',
      required: true,
    },
    description: {
      type: String,
      required: true,
      path: String
    },
  },
  item2: {
    name: {
      type: String,
      required: true,
    },
    price: {
      price: 200,
      type: Number,
      required: true,
    },
    description: {
      type: String,
      path: String,
      required: true,
    },
  },
  item3: {
    name: {
      type: String,
      required: true,
    },
    price: {
      price: 200,
      type: Number,
      required: true,
    },
    description: {
      type: String,
      path: String,
      required: true,
    },
  },
  item4: {
    name: {
      type: String,
      required: true,
    },
    price: {
      price: 200,
      type: Number,
      required: true,
    },
    description: {
      type: String,
      path: String,
      required: true,
    },
  },
  item5: {
    name: {
      type: String,
      required: true,
    },
    price: {
      price: 200,
      type: Number,
      required: true,
    },
    description: {
      type: String,
      path: String,
      required: true,
    },
  },
  item6: {
    name: {
      type: String,
      required: true,
    },
    price: {
      price: 200,
      type: Number,
      required: true,
    },
    description: {
      type: String,
      path: String,
      required: true,
    },
  },
},
);

const Items = model('items', itemSchema);
module.exports = Items;
