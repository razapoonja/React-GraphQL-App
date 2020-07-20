import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Author {
        id: ID!
        name: String!
        age: Int!
        books: [Book]
    }

    type Book {
        id: ID!
        name: String!,
        genre: String!
        author: Author
    }

    type Query {
        authors: [Author!]!,
        author(id:ID!): Author,
        
        books: [Book!]!,
        book(id:ID!): Book,
    }

    type Mutation {
        addAuthor(name: String!, age: Int!): Author!,
        addBook(name: String!, genre: String!, authorid: String!): Book!
    }
`;