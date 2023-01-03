import "twin.macro"

import { Typography, Unstable_Grid2 } from "@mui/material"
import { ChainCard } from "components/card/ChainCard"
import { numWithComma } from "lib/common"
import { Chain } from "models/chain"
import { GetServerSideProps, NextPage } from "next"
import { useRecoilValue } from "recoil"
import { chainsService } from "services"
import { testnetState } from "states/atoms/testnet"

interface ChainsPageProps {
  chains: Chain[]
  totalChainCounts: string
  totalDappCounts: string
}

const ChainsPage: NextPage<ChainsPageProps> = ({
  chains,
  totalChainCounts,
  totalDappCounts,
}) => {
  const testnets = useRecoilValue(testnetState)

  return (
    <div tw="w-full">
      <section tw="max-w-5xl mx-auto px-2 py-4">
        <div tw="flex justify-between items-center lg:flex-row flex-col">
          <Typography variant="h3" component={"h3"}>
            Select chain
          </Typography>
          <Typography variant="h5" component={"h5"}>
            {totalChainCounts} CHAINS - {totalDappCounts} DAPPS
          </Typography>
        </div>
        <Unstable_Grid2
          container
          tw="mt-2"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 4, md: 12 }}>
          {chains.map(({ name }) => (
            <Unstable_Grid2 key={name} xs={4} sm={4} md={4} tw="pb-0">
              <ChainCard title={name} desc={`${numWithComma(1234)} dapps`} />
            </Unstable_Grid2>
          ))}
        </Unstable_Grid2>
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<
  ChainsPageProps
> = async () => {
  const chains = await chainsService.getChains({
    page: 1,
    take: 10,
    order: "DESC",
  })

  const totalChainCounts = numWithComma(chains.meta.itemCount)
  const totalDappCounts = numWithComma(1000) // sample

  return {
    props: {
      chains: chains.data,
      totalChainCounts,
      totalDappCounts,
    },
  }
}

export default ChainsPage
