import AuthProvider from '../../components/auth/AuthProvider'
import '@/styles/globals.css'
import { CookiesProvider } from "react-cookie";
export default function App({ Component, pageProps }) {
  return(
    <>
  <CookiesProvider>  
  <AuthProvider>
     <Component {...pageProps}/>
  </AuthProvider>
  </CookiesProvider>
   </>)
}
