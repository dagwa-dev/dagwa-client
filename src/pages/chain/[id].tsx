import "twin.macro"

import { Typography, Unstable_Grid2 } from "@mui/material"
import { getAllChain, getOneChain } from "api/chain/ChainApiClient"
import { appConfig } from "libs/appConfig"
import { Chain } from "models/chain"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { ParsedUrlQuery } from "querystring"

type ChainDetailPageProps = {
  chain: Chain
}
type ChainDetailPageQuery = ParsedUrlQuery & {
  id: string
}

const ChainDetailPage: NextPage<ChainDetailPageProps> = ({ chain }) => (
  <div tw="w-full">
    <section tw="max-w-5xl mx-auto px-2 py-4">
      <Typography>Chains{chain.name && ` / ${chain.name}`}</Typography>
      <Unstable_Grid2
        container
        tw="mt-2"
        // spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12 }}></Unstable_Grid2>
    </section>
  </div>
)

export const getStaticPaths: GetStaticPaths<
  ChainDetailPageQuery
> = async () => {
  const chains = await getAllChain(`${appConfig.serviceApiBase}/chain`, {
    page: 1,
    take: 10,
  })

  const paths: { params: ChainDetailPageQuery }[] = chains.data.map(
    ({ id }) => ({
      params: { id: String(id) },
    }),
  )

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  ChainDetailPageProps,
  ChainDetailPageQuery
> = async (context) => {
  const id = String(context.params?.id)
  const chain = await getOneChain(`${appConfig.serviceApiBase}/chain/${id}`)
  console.info(chain)
  return {
    props: {
      chain,
    },
  }
}

export default ChainDetailPage
