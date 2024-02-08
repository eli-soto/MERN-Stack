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

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;
