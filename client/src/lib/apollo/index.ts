import {ApolloClient, ApolloLink, concat, createHttpLink, from, InMemoryCache} from "@apollo/client"
import {RetryLink} from "@apollo/client/link/retry";

export type createBrowserClientOptions = {
    xsrfToken: string
}

export const createBrowserClient = ({ xsrfToken }: createBrowserClientOptions) => {
    const retryLink = new RetryLink({
        attempts: {
            retryIf: (error, operation) => {
                return error && operation.operationName && !operation.operationName.includes('Mutation')
            }
        }
    })
    const headersLink = new ApolloLink((operation, forward) => {
        // add the authorization to the headers
        operation.setContext(({ headers = {} }) => {
            return {
                headers: {
                ...headers,
                        ['X-XSRF-TOKEN']: xsrfToken,
                        host: window.location.host
                },
            }
        })

        return forward(operation)
    })
    const httpLink = createHttpLink({
        uri: `https://${process.env.GRAPHQL_HOST}/api/graphql`,
        credentials: 'include',
        fetchOptions: {
            mode: 'cors'
        }
    })

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: from([retryLink, headersLink, httpLink]),
        connectToDevTools: process.env.NODE_ENV === "development"
    })
}