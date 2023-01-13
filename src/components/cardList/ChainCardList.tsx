import "twin.macro"

import { Unstable_Grid2 as Grid } from "@mui/material"
import { ChainCard } from "components/card/ChainCard"
import { Chain } from "models/chain"
import { FC } from "react"

type ChainCardListProps = {
  chains: Chain[]
}

const ChainCardList: FC<ChainCardListProps> = ({ chains }) => (
  <Grid
    container
    tw="mt-2"
    spacing={{ xs: 2, md: 3 }}
    columns={{ xs: 4, sm: 4, md: 12 }}>
    {chains.map(({ ulid, name, unit }) => (
      <Grid key={unit} xs={4} sm={4} md={4} tw="pb-0">
        <ChainCard title={name} href={`/chain/${ulid}`} />
      </Grid>
    ))}
  </Grid>
)

export default ChainCardList
