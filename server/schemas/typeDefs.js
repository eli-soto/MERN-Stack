const { gql } = require('apollo-server-express');
const Product = require('./models/items'); // Import your Product model

// Define GraphQL schema using the schema language
const typeDefs = gql`
  type Product {
    _id: ID!
    name: String!
    price: Float!
    description: String!
  }

  type Query {
    getProduct(productId: ID!): Product
    getAllProduct: [Product]
  }

  type Mutation {
    createProduct(name: String!, price: Float!, description: String!): Product
    updateProduct(id: ID!, name: String!, price: Float!, description: String!): Product
    deleteProduct(id: ID!): Product
  }
`;
module.exports = typeDefs;
