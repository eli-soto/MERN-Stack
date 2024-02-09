import { gql } from '@apollo/client';

export const QUERY_PRODUCTS= gql`
   {
    getAllProduct {
      _id
      name
      price
      description
    }
  }
`;

export const QUERY_ITEM =  gql` 
query products($productId: ID!) {
  getProduct(productId: $productId) {
    _id
    price
    name
    description
  },
  }

`;
// console.log(QUERY_PRODUCT)

