import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
    query getAllProduct {
      getAllProduct{
      _id
      name
      price
      description
      image
    },
  }

`;

export const QUERY_ITEM = gql` 
query products($productId: ID!) {
  getProduct(productId: $productId) {
    _id
    price
    name
    description
    image
  },
  }

`;
// console.log(QUERY_PRODUCT)

