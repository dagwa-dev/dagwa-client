import "twin.macro"

import { Unstable_Grid2 } from "@mui/material"
import Link from "next/link"
import { coreStyles } from "styles/core"

const routes = ["chains"]

const RouteTemp = () => {
  return (
    <Unstable_Grid2 container tw="w-full flex-col items-center">
      {routes.map((route) => (
        <Unstable_Grid2
          key={route}
          tw="pb-0 text-center text-2xl"
          xs={4}
          sm={4}
          md={4}>
          <Link href={route}>{route}</Link>
        </Unstable_Grid2>
      ))}
    </Unstable_Grid2>
  )
}

const Home = () => {
  return (
    <div css={coreStyles.container({ hasBackground: true })}>
      <RouteTemp />
    </div>
  )
}

export default Home
