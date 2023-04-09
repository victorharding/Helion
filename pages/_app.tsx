import '../styles/globals.css';
import Layout from '../src/components/layout/index'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}
