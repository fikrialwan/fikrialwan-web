import { ApolloClient, InMemoryCache } from "@apollo/client";
import env from "react-dotenv";

const client = new ApolloClient({
  uri: env.GRAPHQL_URL,
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": env.SECRET,
  },
  cache: new InMemoryCache(),
});

export default client;
