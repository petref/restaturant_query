import express from "express";
import graphqlServer from './graphql/index.js';

const app = express();

graphqlServer(app);

export default app;