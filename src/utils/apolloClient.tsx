import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.hygraph.com/v2/clhpyxlzm7adc01uo5e9uf0zh/master",
    cache: new InMemoryCache(),
  });