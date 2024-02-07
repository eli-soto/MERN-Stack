const { Product } = require('../models/items.js');
const resolvers = {
  Query: {
    getAllProduct: async() => {
      return Product.find();
    },

    getProduct: async(parent, { productId }) => {
      return Product.findOne({ _id: productId });
    }
  },
  Mutation: {
    createProduct: async(parent, { id, name, price, description }) => {
      return Product.create({ id, name, price, description });
    },
    updateProduct: async(parent, { id, name, price, description }) => {
      return Product.findOneAndUpdate(
        { _id: id },
        { name, price, description },
        { new: true }
      );
    },
    deleteProduct: async(parent, { id }) => {
      return Product.findOneAndDelete({ _id: id });
    }
  }
}

module.exports = resolvers;