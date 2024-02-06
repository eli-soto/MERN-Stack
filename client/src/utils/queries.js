import { gql } from '@apollo/client';

export const QUERY_Products = gql`
  query tech {
    tech {
      _id
      name
    }
  }
`;

export const QUERY_Items = gql`
  query Products($_id: String) {
    getProducts(_id: $_id) {
      _id
      item1
      item2
      item3
      item4
      item5
      item6

    }
  }
`;
