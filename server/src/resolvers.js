import { Author } from './models/author';
import { Book } from './models/book';

export const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        authors: () => Author.find(),
        books: () => Book.find()
    }
};