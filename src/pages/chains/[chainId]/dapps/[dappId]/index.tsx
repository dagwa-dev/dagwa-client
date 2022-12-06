import "twin.macro"

import { faker } from "@faker-js/faker"
import { Typography, Unstable_Grid2 } from "@mui/material"
import { NFT } from "api/nfts/types"
import { NftCard } from "components/card/NftCard"
import { TokenChart } from "components/chart/TokenChart"
import { TokenInfoTable } from "components/table/TokenInfoTable"
import { GetServerSideProps, NextPage } from "next"
import { dappsService, nftsService } from "services"
import { ulid } from "ulid"
import { NFTsToken } from "utils/tokens/types"

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
}

const labels = ["January", "February", "March", "April", "May", "June", "July"]

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
}

const createData = (
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) => {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
]

interface DappPageProps {
  nfts?: NFT[]
  chainIds?: string[]
  dappId?: string
  dappName?: string
}

const DappPage: NextPage<DappPageProps> = ({
  dappName,
  dappId,
  chainIds = [],
  nfts = [],
}) => {
  return (
    <div tw="w-full">
      {dappName && (
        <>
          <section tw="max-w-5xl mx-auto px-2 py-4">
            <Typography>Token Information</Typography>
            <Typography>{dappName}</Typography>
            <TokenInfoTable rows={rows} />
          </section>
          <section tw="max-w-5xl mx-auto px-2 py-4">
            <Typography>Token Dashboards</Typography>
            <TokenInfoTable rows={rows} />
            <TokenChart type="line" options={options} data={data} />
          </section>
          <section tw="max-w-5xl mx-auto px-2 py-4">
            <Typography>{dappName}</Typography>
            <TokenInfoTable rows={rows} />
            <TokenChart type="line" options={options} data={data} />
          </section>
        </>
      )}
      {nfts.map((nft) => (
        <section key={ulid()} tw="max-w-5xl mx-auto px-2 py-4">
          <Unstable_Grid2 container spacing={1} tw="justify-between">
            {nft.items.map((item) => (
              <Unstable_Grid2 key={item.token_id}>
                <NftCard item={item} height={"40"} chainIds={chainIds} />
              </Unstable_Grid2>
            ))}
          </Unstable_Grid2>
          <TokenInfoTable rows={rows} />
          <TokenChart type="line" options={options} data={data} />
        </section>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<
  DappPageProps,
  { dappId: string }
> = async ({ query }) => {
  const dapp = dappsService.getDapp(String(query?.dappId))
  if (!dapp) return { props: {} }

  const nftTokens = dapp.tokens.filter(
    (token) => token.type === "nft",
  ) as NFTsToken[]

  const nfts = await Promise.all(
    nftTokens.map(async (token) =>
      nftsService.getNFTsIDsForContract(token.chainId, token.address),
    ),
  )

  const sliced = nfts.map((nft) => ({
    ...nft,
    items: nft.items
      .map(({ token_id, contract_address }) => ({ token_id, contract_address }))
      .slice(0, 1000),
  })) as NFT[]

  return {
    props: {
      dappName: dapp.name,
      dappId: dapp.dappId,
      chainIds: dapp.chainIds,
      nfts: sliced,
    },
  }
}

export default DappPage
