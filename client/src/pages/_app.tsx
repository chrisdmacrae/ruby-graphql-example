import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AuthProvider} from "../lib/auth-context";
import {ApolloProvider} from "@apollo/client";
import {createBrowserClient} from "../lib/apollo";
import {useMemo} from "react";

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
            <Component {...pageProps} />
          </AuthProvider>
      </ApolloProvider>
  )
}

export default MyApp
