const { gql } = require('apollo-server-express');
const {resolvers} = require('./resolvers');
const typeDefs = `
  type Products {
    id: ID!
    name: String!
    price: Float!
    description: String!
  }
  
  type Query {
    getProduct(id:ID!): Products
    getAllProducts: [Products]
  }
  type Mutation {
    createProduct(name: String!, price: Float!, description: String!): Products
    updateProduct(id: ID!, name: String!, price: Float!, description: String!): Products
    deleteProduct(id: ID!): Products
  }
`;

module.exports = typeDefs;
