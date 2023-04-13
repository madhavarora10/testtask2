import AuthProvider from '../../components/auth/AuthProvider'
import '@/styles/globals.css'
import { CookiesProvider } from "react-cookie";
export default function App({ Component, pageProps }) {
  return(
    <>

<AuthProvider>
        {Component.requireAuth ? (
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>
        ) : (
          // public page
          <Component {...pageProps} />
        )}
      </AuthProvider>
   </>)
}
