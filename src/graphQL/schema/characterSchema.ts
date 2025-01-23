import { gql } from "apollo-server-express";

export const characterTypeDefs = gql`
  type Haki {
    type: String!
    description: String!
  }

  type Ability {
    name: String!
    description: String!
  }

  type DevilFruit {
    fruit: Fruit!
  }

  type Relationship {
    character: Character!
    relationshipType: String!
  }

  type Character {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    nickname: String!
    affiliation: String!
    occupancy: String!
    alive: Boolean!
    bounty: Float
    haki: [Haki!]!
    abilities: [Ability!]!
    devilFruits: [DevilFruit!]!
    relationships: [Relationship!]!
  }

  input HakiInput {
    type: String!
    description: String!
  }

  input AbilityInput {
    name: String!
    description: String!
  }

  input DevilFruitInput {
    fruitId: ID!
  }

  input RelationshipInput {
    characterId: ID!
    relationshipType: String!
  }

  input CreateCharacterInput {
    firstName: String!
    lastName: String!
    fullName: String!
    nickname: String!
    affiliation: String!
    occupancy: String!
    alive: Boolean!
    bounty: Float
    haki: [HakiInput!]!
    abilities: [AbilityInput!]!
    devilFruits: [DevilFruitInput!]!
    relationships: [RelationshipInput!]!
  }

  input UpdateCharacterInput {
    firstName: String
    lastName: String
    fullName: String
    nickname: String
    affiliation: String
    occupancy: String
    alive: Boolean
    bounty: Float
    haki: [HakiInput!]
    abilities: [AbilityInput!]
    devilFruits: [DevilFruitInput!]
    relationships: [RelationshipInput!]
  }

  input CharacterFilterInput {
    firstName: StringFilterInput
    lastName: StringFilterInput
    fullName: StringFilterInput
    nickname: StringFilterInput
    affiliation: StringFilterInput
    occupancy: StringFilterInput
    alive: Boolean
    bountyGreaterThan: Float
    bountyLessThan: Float
    sort: SortInput
    pagination: PaginationInput
  }

  extend type Query {
    characters(filter: CharacterFilterInput): [Character!]!
    character(id: ID!): Character
  }

  extend type Mutation {
    createCharacter(input: CreateCharacterInput!): Character!
    updateCharacter(id: ID!, input: UpdateCharacterInput!): Character!
    deleteCharacter(id: ID!): Boolean!
  }
`;
