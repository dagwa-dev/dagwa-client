import "twin.macro"

import { CRYPTO_CURRENCY_SYMBOL } from "components/icon/CryptoCurrencyIcon/constants"
import { CryptoCurrencySymbol } from "components/icon/CryptoCurrencyIcon/type"
import { Layout } from "components/layout/Layout"
import { IntroductionSection } from "components/sections/IntroductionSection"
import { SubscribeSection } from "components/sections/SubscribeSection"
import { genUniqueRandomNumArr } from "lib/common"
import { GetServerSideProps } from "next"
import { FC } from "react"

interface HomeProps {
  randomCryptoCurrencies: CryptoCurrencySymbol[]
}

const Home: FC<HomeProps> = ({ randomCryptoCurrencies }) => {
  return (
    <Layout>
      <IntroductionSection randomCryptoCurrencies={randomCryptoCurrencies} />
      <SubscribeSection />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const randomNumArr12 = genUniqueRandomNumArr(
    12,
    CRYPTO_CURRENCY_SYMBOL.length,
  )

  const randomCryptoCurrencies = await Promise.all(
    randomNumArr12.map((randomNum) => CRYPTO_CURRENCY_SYMBOL[randomNum]),
  )

  return {
    props: { randomCryptoCurrencies }, // will be passed to the page component as props
  }
}

export default Home
