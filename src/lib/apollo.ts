import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from "@apollo/client"
import { onError } from "@apollo/client/link/error"

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${String(
          message,
        )}, Location: ${JSON.stringify(locations)}, Path: ${String(path)}`,
      ),
    )
  if (networkError) console.log(`[Network error]: ${String(networkError)}`)
})

export const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
})
