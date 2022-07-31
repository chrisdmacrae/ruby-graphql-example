import { ApolloClient, ApolloLink, from, createHttpLink, InMemoryCache } from "@apollo/client"
import { onError } from "@apollo/client/link/error";
import Cookies from 'cookies'

type createServerClientOptions = {
    headers?: any
}

export const createNextServerClient = (req: any, res: any) => {
    const cookies = new Cookies(req, res)
    const accessToken = cookies.get('GEEMAIL-ACCESS-TOKEN') || null
    const xsrfCookie = cookies.get('XSRF-TOKEN')
    const xsrfToken = xsrfCookie ? decodeURIComponent(xsrfCookie) : null
    const headers = {
        ...req.headers,
        ['X-XSRF-TOKEN']: xsrfToken
    }

    return { client: createServerClient({ headers }), xsrfToken, accessToken }
}

export const createServerClient = (options: createServerClientOptions = {}) => {
    const headersLink = new ApolloLink((operation, forward) => {
        // add the authorization to the headers
        operation.setContext(({ headers = {} }) => ({
            headers: {
                ...headers,
                ...options.headers,
                host: process.env.GRAPHQL_HOST
            },
        }))

        return forward(operation)
    })
    const httpLink = createHttpLink({
        uri: `https://${process.env.GRAPHQL_HOST}/api/graphql`
    })

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: from([errorLink, headersLink, httpLink]),
    })
}

const errorLink = onError((errors) => {
    if (errors.graphQLErrors)
        errors.graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        );
    if (errors.networkError) {
        console.log(`[Network error]: ${errors.networkError}`);
    }
});
