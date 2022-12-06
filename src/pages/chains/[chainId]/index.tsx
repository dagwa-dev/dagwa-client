import "twin.macro"

import { Typography, Unstable_Grid2 } from "@mui/material"
import { DappCard } from "components/card/DappCard"
import { GetServerSideProps, NextPage } from "next"
import { chainsService, dappsService } from "services"
import { Dapp } from "utils/dapps/types"

interface ChainPageProps {
  dapps: Partial<Dapp>[]
  chainName?: string
  chainId?: string
}

const ChainPage: NextPage<ChainPageProps> = ({
  chainName,
  chainId,
  dapps = [],
}) => {
  return (
    <div tw="w-full">
      <section tw="max-w-5xl mx-auto px-2 py-4">
        <Typography>Chains{chainName && ` / ${chainName}`}</Typography>
        <Unstable_Grid2
          container
          tw="mt-2"
          // spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}>
          {dapps.map(({ dappId, name }) => (
            <Unstable_Grid2 key={dappId} xs={1} sm={1} md={1} tw="pb-0">
              <DappCard chainId={chainId} dappId={dappId} title={name} />
            </Unstable_Grid2>
          ))}
        </Unstable_Grid2>
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<
  ChainPageProps,
  { chainId: string }
> = async ({ query }) => {
  const chain = await chainsService.getChain(String(query?.chainId))
  const dapps = dappsService.getDappsWithChain(String(query?.chainId))

  return {
    props: {
      chainName: chain?.name,
      chainId: chain?.chainId,
      dapps: dapps.map(({ dappId, name }) => ({ dappId, name })),
    },
  }
}

export default ChainPage
