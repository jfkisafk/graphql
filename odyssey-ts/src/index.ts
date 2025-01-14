import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { readFileSync } from "fs";
import { gql } from "graphql-tag";
import path from "path";
import { resolvers } from "./resolvers";

import { ListingApi } from "./datasources/listing-api";

const typeDefs = gql(
  readFileSync(path.resolve(__dirname, "./schema.graphql"), {
    encoding: "utf-8",
  }),
);

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { cache } = server;
  const { url } = await startStandaloneServer(server, {
    context: async () => ({
      datasources: { listingApi: new ListingApi({ cache }) },
    }),
  });

  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
