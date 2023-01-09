import "twin.macro"

import { Typography, Unstable_Grid2 } from "@mui/material"
import { ChainCard } from "components/card/ChainCard"
import { numWithComma } from "lib/common"
import { DApp } from "models/dApp"
import { GetStaticProps, NextPage } from "next"
import { ParsedUrlQuery } from "querystring"
import { dAppService } from "services"

type DAppListPageProps = {
  dApp: DApp[]
  totalDAppCounts: string
  totalDappCounts: string
}
type DAppListPageQuery = ParsedUrlQuery & object

const DAppListPage: NextPage<DAppListPageProps> = ({
  dApp,
  totalDAppCounts,
  totalDappCounts,
}) => (
  <div tw="w-full">
    <section tw="max-w-5xl mx-auto px-2 py-4">
      <div tw="flex justify-between items-center lg:flex-row flex-col">
        <Typography variant="h3" component={"h3"}>
          Select dApp
        </Typography>
        <Typography variant="h5" component={"h5"}>
          {totalDAppCounts} D App - {totalDappCounts} DAPPS
        </Typography>
      </div>
      <Unstable_Grid2
        container
        tw="mt-2"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 4, md: 12 }}>
        {dApp.map(({ id, name }) => (
          <Unstable_Grid2 key={name} xs={4} sm={4} md={4} tw="pb-0">
            <ChainCard
              title={name}
              desc={`${numWithComma(1234)} dapps`}
              href={`/d_app/${String(id)}`}
            />
          </Unstable_Grid2>
        ))}
      </Unstable_Grid2>
    </section>
  </div>
)

export const getStaticProps: GetStaticProps<
  DAppListPageProps,
  DAppListPageQuery
> = async () => {
  const dApp = await dAppService.getDApps({
    page: 1,
    take: 10,
  })

  const totalDAppCounts = numWithComma(dApp.meta.itemCount)
  const totalDappCounts = numWithComma(1000) // sample

  return {
    props: {
      dApp: dApp.data,
      totalDAppCounts,
      totalDappCounts,
    },
  }
}

export default DAppListPage
