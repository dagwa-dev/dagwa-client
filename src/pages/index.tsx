import "twin.macro"

import { Layout } from "components/layout/Layout"
import { IntroductionSection } from "components/sections/IntroductionSection"
import { SubscribeSection } from "components/sections/SubscribeSection"
import { NextPage } from "next"

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => (
  <Layout>
    <IntroductionSection />
    <SubscribeSection />
  </Layout>
)

export default HomePage
