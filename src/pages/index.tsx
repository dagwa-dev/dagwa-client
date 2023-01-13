import "twin.macro"

import { NextPage } from "next"

import { Layout } from "~/components/layout/Layout"
import { IntroductionSection } from "~/components/sections/IntroductionSection"
import { SubscribeSection } from "~/components/sections/SubscribeSection"

type HomePageProps = unknown

const HomePage: NextPage<HomePageProps> = () => (
  <Layout>
    <IntroductionSection />
    <SubscribeSection />
  </Layout>
)

export default HomePage
