import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AuthProvider} from "../lib/auth-context";
import {ApolloProvider} from "@apollo/client";
import {createBrowserClient} from "../lib/apollo";
import {useMemo} from "react";
import {PlaidProvider} from "../view-models/plaid";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useMemo(() => createBrowserClient({
      xsrfToken: pageProps.xsrfToken
  }), [])

  return (
      <ApolloProvider client={client}>
          <AuthProvider
              currentUser={pageProps.currentUser}
              xsrfToken={pageProps.xsrfToken}
          >
              {pageProps.currentUser && (
                <PlaidProvider linkToken={pageProps.currentUser.linkToken}>
                    <Component {...pageProps} />
                </PlaidProvider>
              )}
              {!pageProps.currentUser && (
                  <Component {...pageProps} />
              )}
          </AuthProvider>
      </ApolloProvider>
  )
}

export default MyApp
