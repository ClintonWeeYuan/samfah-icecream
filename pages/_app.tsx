import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {BasketProvider} from "../components/BasketContext";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <BasketProvider>
      <Component {...pageProps} />
    </BasketProvider>
  )
}

export default MyApp
