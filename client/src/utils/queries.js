import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query product {
    getAllProduct {
      _id
      name
      price
      description
    }
  }
`;

export const QUERY_PRODUCT =  gql` 
query products($productId: ID!) {
  getProduct(productId: $productId) {
    _id
    price
    name
    description
  },
  }

`;
console.log(QUERY_PRODUCT)
