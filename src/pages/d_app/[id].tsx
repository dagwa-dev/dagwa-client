import "twin.macro"

import { Typography, Unstable_Grid2 } from "@mui/material"
import { DApp } from "models/dApp"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { ParsedUrlQuery } from "querystring"
import { dAppService } from "services"

type DAppDetailPageProps = {
  dApp: DApp
}
type DAppDetailPageQuery = ParsedUrlQuery & {
  id: string
}

const DAppDetailPage: NextPage<DAppDetailPageProps> = ({ dApp }) => (
  <div tw="w-full">
    <section tw="max-w-5xl mx-auto px-2 py-4">
      <Typography>DApps{dApp.name && ` / ${dApp.name}`}</Typography>
      <Unstable_Grid2
        container
        tw="mt-2"
        // spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12 }}></Unstable_Grid2>
    </section>
  </div>
)

export const getStaticPaths: GetStaticPaths<DAppDetailPageQuery> = async () => {
  const dApps = await dAppService.getDApps({
    page: 1,
    take: 10,
  })

  const paths: { params: DAppDetailPageQuery }[] = dApps.data.map(({ id }) => ({
    params: { id: String(id) },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  DAppDetailPageProps,
  DAppDetailPageQuery
> = async (context) => {
  const dApp = await dAppService.getDApp(String(context.params?.id))

  return {
    props: {
      dApp,
    },
  }
}

export default DAppDetailPage
