import "twin.macro"

import { Unstable_Grid2 } from "@mui/material"
import { CryptoIcon } from "components/icon"
import { FC, PropsWithChildren } from "react"

const IntroductionSection = () => {
  return (
    <section>
      <Unstable_Grid2 container tw="w-full justify-between items-center">
        <Unstable_Grid2 tw="flex justify-center" xs={2} sm={2} md={2}>
          <CryptoIcon color="color" symbol="BTC" width={24} height={24} />
        </Unstable_Grid2>
        <Unstable_Grid2 tw="flex justify-center" xs={2} sm={2} md={2}>
          <CryptoIcon color="color" symbol="ETH" width={24} height={24} />
        </Unstable_Grid2>
        <Unstable_Grid2 tw="flex justify-center" xs={2} sm={2} md={2}>
          <CryptoIcon color="color" symbol="BNB" width={24} height={24} />
        </Unstable_Grid2>
        <Unstable_Grid2 tw="flex justify-center" xs={2} sm={2} md={2}>
          <CryptoIcon color="color" symbol="MATIC" width={24} height={24} />
        </Unstable_Grid2>
        <Unstable_Grid2 tw="flex justify-center" xs={2} sm={2} md={2}>
          <CryptoIcon color="color" symbol="SOL" width={24} height={24} />
        </Unstable_Grid2>
      </Unstable_Grid2>
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
      <RoadmapSection />
      <PricingSection />
      <SubscribeSection />
    </Layout>
  )
}

export default Home
