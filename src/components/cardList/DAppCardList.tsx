import "twin.macro"

import { Unstable_Grid2 as Grid } from "@mui/material"
import { FC } from "react"

import { DAppCard } from "~/components/card/DAppCard"
import { DApp } from "~/models/dApp"

type DAppCardListProps = {
  dApps: DApp[]
}

const DAppCardList: FC<DAppCardListProps> = ({ dApps }) => (
  <Grid
    container
    tw="mt-2"
    spacing={{ xs: 2, md: 3 }}
    columns={{ xs: 4, sm: 4, md: 12 }}>
    {dApps.map(({ ulid, name, desc }) => (
      <Grid key={name} xs={4} sm={4} md={4} tw="pb-0">
        <DAppCard title={name} desc={desc} href={`/d_app/${ulid}`} />
      </Grid>
    ))}
  </Grid>
)

export default DAppCardList
