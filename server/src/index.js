import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import mongoose from 'mongoose';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

require('dotenv').config()

const server = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    server.applyMiddleware({ app });

    await mongoose.connect(process.env.CONNECTION_URL);
    mongoose.connection.once('open', () => {
        console.log('connected to database');
    });

    app.listen(4000, () => {
        console.log('now listening for requests on port 4000');
    });
}

server()