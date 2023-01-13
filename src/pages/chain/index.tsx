import "twin.macro"

import { Typography } from "@mui/material"
import ChainCardList from "components/cardList/ChainCardList"
import { useChainList } from "hooks/useChainList"
import { numWithComma } from "libs/common"
import { NextPage } from "next"

const ChainListPage: NextPage = () => {
  const { chains, loading } = useChainList({ page: 1, take: 10 })

  if (loading) return <div>now loading...</div>
  if (!chains) return null

  const total = numWithComma(chains.meta.itemCount)

  return (
    <div tw="w-full">
      <section tw="max-w-5xl mx-auto px-2 py-4">
        <div tw="flex justify-between items-center lg:flex-row flex-col">
          <Typography variant="h3" component={"h3"}>
            Select chain
          </Typography>
          <Typography variant="h5" component={"h5"}>
            {total} CHAINS
          </Typography>
        </div>
        <ChainCardList chains={chains.data} />
      </section>
    </div>
  )
}

export default ChainListPage
