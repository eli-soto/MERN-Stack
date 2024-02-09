const Items = require('../models');
const resolvers = {
  Query: {
    getAllProduct: async() => {
      return Items.find();
    },

    getProduct: async(parent, { productId }) => {
      console.log(Items);
      return Items.findOne({ _id: productId });
    }
  },
  Mutation: {
    createProduct: async(parent, { id, name, price, description }) => {
      if( await Items.findById(id)) {
        return
      }
      return Items.create({ id, name, price, description });
    },
    updateProduct: async(parent, { id, name, price, description }) => {
      return Items.findOneAndUpdate(
        { _id: id },
        { name, price, description },
        { new: true }
      );
    },
    deleteProduct: async(parent, { id }) => {
      return Items.findOneAndDelete({ _id: id });
    }
  }
}

module.exports = resolvers;