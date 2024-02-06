const typeDefs = `
  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String!
  }
  
  type Query {
    getProduct(id:ID!): Product
    getAllProducts: [Product]
  }
  type Mutation {
    createProduct(name: String!, price: Float!, description: String!): Product
    updateProduct(id: ID!, name: String!, price: Float!, description: String!): Product
    deleteProduct(id: ID!): Product
  }
`;

module.exports = typeDefs;
