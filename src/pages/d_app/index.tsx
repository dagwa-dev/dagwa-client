import "twin.macro"

import { Typography } from "@mui/material"
import DAppCardList from "components/cardList/DAppCardList"
import { useDAppList } from "hooks/useDAppList"
import { numWithComma } from "libs/common"
import { NextPage } from "next"

const DAppListPage: NextPage = () => {
  const { dApps, loading } = useDAppList({ page: 1, take: 10 })

  if (loading) return <div>now loading...</div>
  if (!dApps) return null

  const total = numWithComma(dApps.meta.itemCount)

  return (
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
        <DAppCardList dApps={dApps.data} />
      </section>
    </div>
  )
}

export default DAppListPage
