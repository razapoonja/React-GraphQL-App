import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Query {
        authors: [Author!]!,
        books: [Book!]!
    }

    type Author {
        id: ID!
        name: String!
    }

    type Book {
        id: ID!
        name: String!,
        genre: String!
    }
`;