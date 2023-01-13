import "twin.macro"

import { Typography, Unstable_Grid2 } from "@mui/material"
import { getAllDApp, getOneDApp } from "api/dApp/DAppApiClient"
import { appConfig } from "libs/appConfig"
import { DApp } from "models/dApp"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { ParsedUrlQuery } from "querystring"

type DAppDetailPageProps = {
  dApp: DApp
}
type DAppDetailPageQuery = ParsedUrlQuery & {
  ulid: string
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
  const dApps = await getAllDApp(`${appConfig.serviceApiBase}/d_app`, {
    page: 1,
    take: 10,
  })

  const paths: { params: DAppDetailPageQuery }[] = dApps.data.map(
    ({ ulid }) => ({
      params: { ulid },
    }),
  )

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  DAppDetailPageProps,
  DAppDetailPageQuery
> = async (context) => {
  const ulid = String(context.params?.ulid)
  const dApp = await getOneDApp(`${appConfig.serviceApiBase}/d_app/${ulid}`)

  return {
    props: {
      dApp,
    },
  }
}

export default DAppDetailPage
