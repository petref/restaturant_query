import { ApolloServer } from "apollo-server-express";
import { env } from "../config/environment/index.js";
import schema from './schema.js';

async function apolloServer(app) {
    apolloServer = new ApolloServer({
        schema,
        playground: env.development,
    });

    await apolloServer.start();
    
    apolloServer.applyMiddleware({ app });
}

export default apolloServer;