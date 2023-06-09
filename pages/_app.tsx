import '../styles/globals.css';
import Layout from '../src/components/layout/index'
import type { AppProps } from 'next/app'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../shared/libs/ga'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return(
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}
