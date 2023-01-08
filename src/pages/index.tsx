import "twin.macro"

import { CRYPTO_CURRENCY_SYMBOL } from "components/icon/CryptoCurrencyIcon/constants"
import { CryptoCurrencySymbol } from "components/icon/CryptoCurrencyIcon/type"
import { Layout } from "components/layout/Layout"
import { IntroductionSection } from "components/sections/IntroductionSection"
import { SubscribeSection } from "components/sections/SubscribeSection"
import { genUniqueRandomNumArr } from "lib/common"
import { GetStaticProps } from "next"
import { FC } from "react"

interface HomePageProps {
  randomCryptoCurrencies: CryptoCurrencySymbol[]
}

const HomePage: FC<HomePageProps> = ({ randomCryptoCurrencies }) => (
  <Layout>
    <IntroductionSection randomCryptoCurrencies={randomCryptoCurrencies} />
    <SubscribeSection />
  </Layout>
)

export const getStaticProps: GetStaticProps<HomePageProps> = () => {
  const randomNumArr12 = genUniqueRandomNumArr(
    12,
    CRYPTO_CURRENCY_SYMBOL.length,
  )

  const randomCryptoCurrencies = randomNumArr12.map(
    (randomNum) => CRYPTO_CURRENCY_SYMBOL[randomNum],
  )

  return {
    props: { randomCryptoCurrencies },
  }
}

export default HomePage
