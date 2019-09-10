import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  extend type Query {
    me: User
  }
  type User @key(fields: "id") {
    id: ID!
    name: String
    username: String
  }
`;

export default typeDefs;
