import { gql } from "apollo-server-express";

export const commonTypeDefs = gql`
  scalar Date

  enum SortOrder {
    ASC
    DESC
  }

  input SortInput {
    field: String!
    order: SortOrder!
  }

  input PaginationInput {
    offset: Int
    limit: Int
  }

  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;
