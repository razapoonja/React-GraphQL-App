import { Author } from './models/author';
import { Book } from './models/book';

export const resolvers = {
    Query: {
        authors: () => Author.find(),
        author: (parent, { id }) => Author.findById(id),

        books: () => Book.find(),
        book: (parent, { id }) => Book.findById(id),
    },

    Author: {
        books(parent) {
            return Book.find({authorid: parent.id})
        }
    },

    Book: {
        author(parent) {
            return Author.findById(parent.authorid)
        }
    },

    Mutation: {
        addAuthor: async(_, { name, age }) => {
            let author = new Author({
                name,
                age
            });

            await author.save();
            return author;
        },

        addBook: async(_, { name, genre, authorid }) => {
            let book = new Book({
                name,
                genre,
                authorid
            });

            await book.save();
            return book;
        }
    }
};