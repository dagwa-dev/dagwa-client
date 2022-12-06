import "twin.macro"

import { Typography } from "@mui/material"
import { NFT } from "api/nfts/types"
import { GetServerSideProps, NextPage } from "next"

interface NFTsPageProps {
  nft?: NFT
  contract_address: string
}

const NFTsPage: NextPage<NFTsPageProps> = ({ nft, contract_address }) => {
  return (
    <div tw="w-full">
      <div tw="text-center">
        <Typography>contract_address: {contract_address}</Typography>
      </div>
      <div tw="text-center">{nft && <Typography>nft</Typography>}</div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<
  NFTsPageProps,
  {
    chainId: string
    tokenId: string
    contract_address: string
  }
> = async ({ query }) => {
  await new Promise((resolve) => resolve(true)) // sample
  const chainId = query?.chainId as string
  const tokenId = query?.tokenId as string
  const contract_address = query?.contract_address as string

  return { props: { contract_address } }
}

export default NFTsPage
