import { gql } from "apollo-server-express";

export const arcTypeDefs = gql`
  type ArcCharacter {
    character: Character!
    role: String!
  }

  type Arc {
    id: ID!
    name: String!
    firstChapter: Int!
    lastChapter: Int!
    characters: [ArcCharacter!]!
    plot: String!
  }

  input ArcCharacterInput {
    characterId: ID!
    role: String!
  }

  input CreateArcInput {
    name: String!
    firstChapter: Int!
    lastChapter: Int!
    characters: [ArcCharacterInput!]!
    plot: String!
  }

  input UpdateArcInput {
    name: String
    firstChapter: Int
    lastChapter: Int
    characters: [ArcCharacterInput!]
    plot: String
  }

  input ArcFilterInput {
    name: StringFilterInput
    firstChapterGreaterThan: Int
    firstChapterLessThan: Int
    lastChapterGreaterThan: Int
    lastChapterLessThan: Int
    sort: SortInput
    pagination: PaginationInput
  }

  extend type Query {
    arcs(filter: ArcFilterInput): [Arc!]!
    arc(id: ID!): Arc
  }

  extend type Mutation {
    createArc(input: CreateArcInput!): Arc!
    updateArc(id: ID!, input: UpdateArcInput!): Arc!
    deleteArc(id: ID!): Boolean!
  }
`;
