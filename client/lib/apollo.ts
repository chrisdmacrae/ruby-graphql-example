import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.NODE_ENV === 'production' ? "http://localhost:3010/graphql" : "http://localhost:3010/graphql",
    cache: new InMemoryCache(),
});

export default client;