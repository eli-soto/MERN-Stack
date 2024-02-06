const resolvers = {
  Query: {
    products: () => {
      return products;
    },
    product:(parent,args) => {
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
      products.push(newProduct);
      return newProduct;
    },
    updateProduct: (parent,args) => {
      const {id,name,price,description } = args;
      const product = products.find(product => product.id === id);
      product.name = name;
      product.price = price;
      product.description = description;
      return product;
    },
    deleteProduct: (parent,args) => {
      const {id } = args;
      const product = products.find(product => product.id === id);
      products = products.filter(product => product.id !== id);
      return product;
    }
  }
};

module.exports = resolvers;
