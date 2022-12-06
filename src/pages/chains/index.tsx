import "twin.macro"

import { Typography, Unstable_Grid2 } from "@mui/material"
import { ChainCard } from "components/card/ChainCard"
import { GetServerSideProps, NextPage } from "next"
import { useMemo } from "react"
import { useRecoilValue } from "recoil"
import { chainsService } from "services"
import { searchState } from "states/atoms/search"
import { testnetState } from "states/atoms/testnet"
import { isTestnetOrDevnetChain, sortingChainsWithTvls } from "utils/chains"
import { Chain, ChainTvl } from "utils/chains/types"
import { numWithComma } from "utils/common"

interface ChainsPageProps {
  sortedChains: Chain[]
  chainCounts: string
  totalDappCounts: string
}

const ChainsPage: NextPage<ChainsPageProps> = ({
  sortedChains,
  chainCounts,
  totalDappCounts,
}) => {
  const testnets = useRecoilValue(testnetState)
  const search = useRecoilValue(searchState)

  const getChainsByNetwork = () =>
    testnets
      ? sortedChains
      : sortedChains.filter((item) => !isTestnetOrDevnetChain(item))

  const chains = useMemo(getChainsByNetwork, [testnets, sortedChains])

  return (
    <div tw="w-full">
      <section tw="max-w-5xl mx-auto px-2 py-4">
        <div tw="flex justify-between items-center lg:flex-row flex-col">
          <Typography variant="h3" component={"h3"}>
            Select chain
          </Typography>
          <Typography variant="h5" component={"h5"}>
            {chainCounts} CHAINS - {totalDappCounts} DAPPS
          </Typography>
        </div>
        <Unstable_Grid2
          container
          tw="mt-2"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 4, md: 12 }}>
          {chains.map(({ name: title, chainId }) => (
            <Unstable_Grid2 key={title} xs={4} sm={4} md={4} tw="pb-0">
              <ChainCard
                href={`/chains/${chainId}`}
                title={title}
                desc={`${numWithComma(1234)} dapps`}
              />
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
  const chains: Chain[] = await chainsService.getChains()
  const chainTvls: ChainTvl[] = await chainsService.getChainTvls()

  const sortedChains = sortingChainsWithTvls(chains, chainTvls)

  const chainCounts = numWithComma(chains.length)
  const totalDappCounts = numWithComma(1000) // sample

  return {
    props: {
      sortedChains,
      chainCounts,
      totalDappCounts,
    },
  }
}

export default ChainsPage
