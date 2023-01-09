import { ApolloProvider } from "@apollo/client"
import axios from "axios"
import { client } from "lib/apollo"
import type { AppProps } from "next/app"
import Head from "next/head"
import { useRouter } from "next/router"
import Script from "next/script"
import { useEffect } from "react"
import { RecoilRoot } from "recoil"
import StyleProvider from "styles/StyleProvider"
import { SWRConfig } from "swr"

import * as gtag from "../lib/gtag"

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    router.events.on("hashChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
      router.events.off("hashChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ApolloProvider client={client}>
        <StyleProvider>
          <RecoilRoot>
            <SWRConfig
              value={{
                refreshInterval: 3000,
              }}>
              <Component {...pageProps} />
            </SWRConfig>
          </RecoilRoot>
        </StyleProvider>
      </ApolloProvider>
    </>
  )
}

export default CustomApp
