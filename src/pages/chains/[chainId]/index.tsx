import "twin.macro"

import { Typography, Unstable_Grid2 } from "@mui/material"
import { GetServerSideProps, NextPage } from "next"
import { chainsService } from "services"

interface ChainPageProps {
  chainName?: string
}

const ChainPage: NextPage<ChainPageProps> = ({ chainName }) => {
  return (
    <div tw="w-full">
      <section tw="max-w-5xl mx-auto px-2 py-4">
        <Typography>Chains{chainName && ` / ${chainName}`}</Typography>
        <Unstable_Grid2
          container
          tw="mt-2"
          // spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}></Unstable_Grid2>
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<
  ChainPageProps,
  { chainId: string }
> = async ({ query }) => {
  const chain = await chainsService.getChain(String(query?.chainId))

  return {
    props: {
      chainName: chain?.name,
    },
  }
}

export default ChainPage
