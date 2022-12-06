import { ApolloProvider } from "@apollo/client"
import type { AppProps } from "next/app"
import Head from "next/head"
import { RecoilRoot } from "recoil"
import StyleProvider from "styles/StyleProvider"
import { client } from "utils/apollo"

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ApolloProvider client={client}>
      <StyleProvider>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </StyleProvider>
    </ApolloProvider>
  </>
)

export default CustomApp
