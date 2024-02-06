const resolvers = {
  Query: {
    getProduct: async (parent, { productId }) => {
      return Product.findOne({ _id: productId });
    },
    getAllProduct: async () => {
      return Product.find();
    }
  },
  Mutation: {
    createProduct: async (parent, { name, price, description }) => {
      return Product.create({ name, price, description });
    },
    updateProduct: async (parent, { id, name, price, description }) => {
      return Product.findOneAndUpdate(
        { _id: id },
        { name, price, description },
        { new: true }
      );
    },
    deleteProduct: async (parent, { id }) => {
      return Product.findOneAndDelete({ _id: id });
    }
  }
};

module.exports = { typeDefs, resolvers };