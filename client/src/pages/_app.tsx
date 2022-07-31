import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AuthProvider} from "../lib/auth-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AuthProvider
          currentUser={pageProps.currentUser}
          xsrfToken={pageProps.xsrfToken}
      >
        <Component {...pageProps} />
      </AuthProvider>
  )
}

export default MyApp
