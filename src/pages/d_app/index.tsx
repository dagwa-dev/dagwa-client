import "twin.macro"

import { Typography, Unstable_Grid2 } from "@mui/material"
import { getAllDApp } from "api/dApp/DAppApiClient"
import { ChainCard } from "components/card/ChainCard"
import { appConfig } from "libs/appConfig"
import { numWithComma } from "libs/common"
import { DApp } from "models/dApp"
import { GetStaticProps, NextPage } from "next"
import { ParsedUrlQuery } from "querystring"

type DAppListPageProps = {
  dApp: DApp[]
  total: string
}
type DAppListPageQuery = ParsedUrlQuery

const DAppListPage: NextPage<DAppListPageProps> = ({ dApp, total }) => (
  <div tw="w-full">
    <section tw="max-w-5xl mx-auto px-2 py-4">
      <div tw="flex justify-between items-center lg:flex-row flex-col">
        <Typography variant="h3" component={"h3"}>
          Select D-App
        </Typography>
        <Typography variant="h5" component={"h5"}>
          {total} D-App
        </Typography>
      </div>
      <Unstable_Grid2
        container
        tw="mt-2"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 4, md: 12 }}>
        {dApp.map(({ ulid, name, desc }) => (
          <Unstable_Grid2 key={name} xs={4} sm={4} md={4} tw="pb-0">
            <ChainCard title={name} desc={desc} href={`/d_app/${ulid}`} />
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
  const dApp = await getAllDApp(`${appConfig.serviceApiBase}/d_app`, {
    page: 1,
    take: 10,
  })

  const total = numWithComma(dApp.meta.itemCount)

  return {
    props: {
      dApp: dApp.data,
      total,
    },
  }
}

export default DAppListPage
