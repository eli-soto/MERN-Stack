const typeDefs =`
  type Product {
    _id: ID
    name: String
    price: Float
    description: String
    image: String!
  }

  type Query {
    getAllProduct: [Product]
    getProduct(productId: ID!): Product
    
  }

  type Mutation {
    createProduct(id: ID!,
      name: String!, 
      price: Float!, 
      description: String!
      ): Product
    
      updateProduct(id: ID!, 
      name: String!, 
      price: Float!, 
      description: String!): Product
    
      deleteProduct(id: ID!): Product
  }
`;

module.exports = typeDefs;