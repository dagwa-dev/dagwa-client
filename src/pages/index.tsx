import "twin.macro"

import { Typography, Unstable_Grid2 } from "@mui/material"
import { CryptoCurrencyCard } from "components/card/CryptoCurrencyCard"
import { CRYPTO_CURRENCY_SYMBOL } from "components/icon/CryptoCurrencyIcon/constants"
import { CryptoCurrencySymbol } from "components/icon/CryptoCurrencyIcon/type"
import { FC, PropsWithChildren } from "react"
import { genUniqueRandomNumArr } from "utils/common"

const majorCryptoCurrenciesTop4: CryptoCurrencySymbol[] = [
  "BTC",
  "ETH",
  "BNB",
  "MATIC",
]

const IntroductionSection = () => {
  const randomNumArr12 = genUniqueRandomNumArr(
    12,
    CRYPTO_CURRENCY_SYMBOL.length,
  )

  const randomCryptoCurrencies = randomNumArr12.map(
    (randomNum) => CRYPTO_CURRENCY_SYMBOL[randomNum],
  )

  return (
    <section tw="w-full flex items-center bg-gray-100 py-8">
      <div tw="w-1/2 items-center">
        <Typography
          tw="text-center font-extrabold text-4xl"
          variant="h2"
          component={"h2"}>
          The Decentralized Application List
        </Typography>
      </div>
      <div tw="w-1/2 items-center">
        <Unstable_Grid2 container spacing={2} tw="flex justify-center">
          {majorCryptoCurrenciesTop4.map((symbol) => (
            <Unstable_Grid2 key={symbol} tw="flex justify-center">
              <CryptoCurrencyCard symbol={symbol} size={48} />
            </Unstable_Grid2>
          ))}
          <Unstable_Grid2 tw="flex justify-center w-12" />
        </Unstable_Grid2>
        <Unstable_Grid2 container spacing={2} tw="flex justify-center">
          <Unstable_Grid2 tw="flex justify-center w-12" />
          {randomCryptoCurrencies.slice(0, 4).map((symbol) => (
            <Unstable_Grid2 key={symbol} tw="flex justify-center">
              <CryptoCurrencyCard symbol={symbol} size={48} />
            </Unstable_Grid2>
          ))}
        </Unstable_Grid2>
        <Unstable_Grid2 container spacing={2} tw="flex justify-center">
          {randomCryptoCurrencies.slice(4, 8).map((symbol) => (
            <Unstable_Grid2 key={symbol} tw="flex justify-center">
              <CryptoCurrencyCard symbol={symbol} size={48} />
            </Unstable_Grid2>
          ))}
          <Unstable_Grid2 tw="flex justify-center w-12" />
        </Unstable_Grid2>
        <Unstable_Grid2 container spacing={2} tw="flex justify-center">
          <Unstable_Grid2 tw="flex justify-center w-12" />
          {randomCryptoCurrencies.slice(8, 12).map((symbol) => (
            <Unstable_Grid2 key={symbol} tw="flex justify-center">
              <CryptoCurrencyCard symbol={symbol} size={48} />
            </Unstable_Grid2>
          ))}
        </Unstable_Grid2>
      </div>
    </section>
  )
}

const RoadmapSection = () => {
  return (
    <section>
      <Unstable_Grid2 container tw="w-full flex-col items-center">
        <Unstable_Grid2 tw="pb-0 text-center text-2xl" xs={4} sm={4} md={4}>
          RoadmapSection
        </Unstable_Grid2>
      </Unstable_Grid2>
    </section>
  )
}

const PricingSection = () => {
  return (
    <section>
      <Unstable_Grid2 container tw="w-full flex-col items-center">
        <Unstable_Grid2 tw="pb-0 text-center text-2xl" xs={4} sm={4} md={4}>
          PricingSection
        </Unstable_Grid2>
      </Unstable_Grid2>
    </section>
  )
}
const SubscribeSection = () => {
  return (
    <section>
      <Unstable_Grid2 container tw="w-full flex-col items-center">
        <Unstable_Grid2 tw="pb-0 text-center text-2xl" xs={4} sm={4} md={4}>
          SubscribeSection
        </Unstable_Grid2>
      </Unstable_Grid2>
    </section>
  )
}

const Header = () => {
  return (
    <header>
      <Unstable_Grid2 container tw="w-full flex-col items-center">
        <Unstable_Grid2 tw="pb-0 text-center text-2xl" xs={4} sm={4} md={4}>
          Header
        </Unstable_Grid2>
      </Unstable_Grid2>
    </header>
  )
}
const Footer = () => {
  return (
    <footer>
      <Unstable_Grid2 container tw="w-full flex-col items-center">
        <Unstable_Grid2 tw="pb-0 text-center text-2xl" xs={4} sm={4} md={4}>
          Footer
        </Unstable_Grid2>
      </Unstable_Grid2>
    </footer>
  )
}

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

const Home = () => {
  return (
    <Layout>
      <IntroductionSection />
      {/* <RoadmapSection /> */}
      {/* <PricingSection /> */}
      <SubscribeSection />
    </Layout>
  )
}

export default Home
