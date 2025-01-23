import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Fruit {
    id: String!
    name: String!
    type: String!
    meaning: String!
    properties: String!
  }

  type Query {
    fruits: [Fruit]
    fruit(id: String!): Fruit
    hello: String
  }

  type Mutation {
    createFruit(
      name: String!
      type: String!
      meaning: String!
      properties: String!
    ): Fruit
    updateFruit(
      id: String!
      name: String
      type: String
      meaning: String
      properties: String
    ): Fruit
    deleteFruit(id: String!): Boolean
  }
`;

export default typeDefs;
