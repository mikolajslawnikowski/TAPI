import { gql } from "apollo-server-express";

export const fruitTypeDefs = gql`
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

  extend type Query {
    fruits(filter: FruitFilterInput): [Fruit!]!
    fruit(id: ID!): Fruit
  }

  extend type Mutation {
    createFruit(input: CreateFruitInput!): Fruit!
    updateFruit(id: ID!, input: UpdateFruitInput!): Fruit!
    deleteFruit(id: ID!): Boolean!
  }
`;
