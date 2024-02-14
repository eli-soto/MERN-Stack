import { gql } from '@apollo/client';

export const CREATE_PRODUCT = gql`
  mutation createProduct($createProductId: ID!, $name: String!, $price: Float!, $description: String!) {
    createProduct(id: $createProductId, name: $name, price: $price, description: $description) {
      _id
      name
      price
      description
    }
  }
`;

export const  UPDATE_PRODUCT = gql`
mutation UpdateProduct($updateProductId: ID!, $name: String!, $price: Float!, $description: String!) {
  updateProduct(id: $updateProductId, name: $name, price: $price, description: $description)
`;
export const  DELETE_PRODUCT = gql`
mutation DeleteProduct($deleteProductId: ID!) {
  deleteProduct(id: $deleteProductId) {
    _id
    price
    name
    description
  }
}
`;

