const resolvers = {
  Query: {
    Products:(parent,args) => {
      const {id} = args;
      return products.id === id;
    }
  },
  Mutation: {
    addProduct: (parent,args) => {
      const{name,price,description} = args;
      const newProduct = {
        id: uuidv4(),
        name,
        price,
        description
      }
      Products.push(newProduct);
      return newProduct;
    },
    updateProduct: (parent,args) => {
      const {id,name,price,description } = args;
      const product = Products.find(product => product.id === id);
      product.name = name;
      product.price = price;
      product.description = description;
      return product;
    },
    deleteProduct: (parent,args) => {
      const {id } = args;
      const product = Products.find(product => product.id === id);
      products = Products.filter(product => product.id !== id);
      return product;
    }
  }
};

module.exports = resolvers;
