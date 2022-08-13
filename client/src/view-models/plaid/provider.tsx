import {
    usePlaidLink,
    PlaidLinkOptions,
} from 'react-plaid-link';
import {PropsWithChildren, useEffect, useState} from "react";
import {gql, useMutation} from "@apollo/client";
import {Context} from "./context";

export type PlaidProviderProps = PropsWithChildren & {
    linkToken: string
}

export const PlaidProvider: React.FC<PlaidProviderProps> = ({ linkToken, children }) => {
    const [authError, setAuthError] = useState<Error>()
    const [authenticate, { data, error }] = useMutation(gql`
        mutation Authenticate($public_token: String!) {
            bankingAuthenticate(input: {publicToken: $public_token}) {
                user {
                    bankAuthorized
                }
            }
        }
    `)
    useEffect(() => error && setAuthError(error), [error])

    const config: PlaidLinkOptions = {
        onSuccess: (public_token) => authenticate({
            variables: { public_token }
        }),
        onExit: (err, metadata) => setAuthError(error),
        token: linkToken
    }
    const { open, exit, ready } = usePlaidLink(config)
    const value = {
        open,
        exit,
        ready,
        error: authError,
        authenticated: data?.bankingAuthenticate.user.bankAuthorized ?? false
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}