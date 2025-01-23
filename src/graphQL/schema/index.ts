import { gql } from "apollo-server-express";

const typeDefs = gql`
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

  input StringFilterInput {
    eq: String
    contains: String
    ne: String
    notContains: String
  }

  input FruitFilterInput {
    name: StringFilterInput
    type: StringFilterInput
    meaning: StringFilterInput
    properties: StringFilterInput
    sort: SortInput
    pagination: PaginationInput
  }

  input CreateFruitInput {
    name: String!
    type: String!
    meaning: String!
    properties: String!
  }

  input UpdateFruitInput {
    name: String
    type: String
    meaning: String
    properties: String
  }

  type Fruit {
    id: ID!
    name: String!
    type: String!
    meaning: String!
    properties: String!
  }

  type Query {
    fruits(filter: FruitFilterInput): [Fruit!]!
    fruit(id: ID!): Fruit
  }

  type Mutation {
    createFruit(input: CreateFruitInput!): Fruit!
    updateFruit(id: ID!, input: UpdateFruitInput!): Fruit!
    deleteFruit(id: ID!): Boolean!
  }
`;

export default typeDefs;
