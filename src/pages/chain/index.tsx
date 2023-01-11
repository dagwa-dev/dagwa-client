import "twin.macro"

import { Typography, Unstable_Grid2 } from "@mui/material"
import { getAllChain } from "api/chain/ChainApiClient"
import { ChainCard } from "components/card/ChainCard"
import { appConfig } from "libs/appConfig"
import { numWithComma } from "libs/common"
import { Chain } from "models/chain"
import { GetStaticProps, NextPage } from "next"
import { ParsedUrlQuery } from "querystring"

type ChainListPageProps = {
  chains: Chain[]
  totalChainCounts: string
  totalDAppCounts: string
}

type ChainListPageQuery = ParsedUrlQuery

const ChainListPage: NextPage<ChainListPageProps> = ({
  chains,
  totalChainCounts,
  totalDAppCounts,
}) => (
  <div tw="w-full">
    <section tw="max-w-5xl mx-auto px-2 py-4">
      <div tw="flex justify-between items-center lg:flex-row flex-col">
        <Typography variant="h3" component={"h3"}>
          Select chain
        </Typography>
        <Typography variant="h5" component={"h5"}>
          {totalChainCounts} CHAINS - {totalDAppCounts} DAPPS
        </Typography>
      </div>
      <Unstable_Grid2
        container
        tw="mt-2"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 4, md: 12 }}>
        {chains.map(({ id, name, unit }) => (
          <Unstable_Grid2 key={unit} xs={4} sm={4} md={4} tw="pb-0">
            <ChainCard
              title={name}
              desc={`${numWithComma(1234)} dapps`}
              href={`/chain/${String(id)}`}
            />
          </Unstable_Grid2>
        ))}
      </Unstable_Grid2>
    </section>
  </div>
)

export const getStaticProps: GetStaticProps<
  ChainListPageProps,
  ChainListPageQuery
> = async () => {
  const chains = await getAllChain(`${appConfig.serviceApiBase}/chain`, {
    page: 1,
    take: 10,
  })

  const totalChainCounts = numWithComma(chains.meta.itemCount)
  const totalDAppCounts = numWithComma(1000) // sample

  return {
    props: {
      chains: chains.data,
      totalChainCounts,
      totalDAppCounts,
    },
  }
}

export default ChainListPage
