const { Product } = require('../models');

const resolvers = {
  Query: {
    getProduct: async (parent, { productId }) => {
      return await Product.findOne({ _id: productId });
    },
    getAllProduct: async () => {
      return await Product.find();
    }
  },
  Mutation: {
    createProduct: async (parent, { name, price, description }) => {
      return await Product.create({ name, price, description });
    },
    updateProduct: async (parent, { id, name, price, description }) => {
      return await Product.findByIdAndUpdate(
        id,
        { name, price, description },
        { new: true }
      );
    },
    deleteProduct: async (parent, { id }) => {
      return await Product.findByIdAndDelete(id);
    }
  }
};

module.exports = { resolvers };