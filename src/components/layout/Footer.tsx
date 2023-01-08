import "twin.macro"

import { Typography, Unstable_Grid2 } from "@mui/material"

export const Footer = () => {
  return (
    <footer tw="max-w-7xl my-0 mx-auto">
      <Unstable_Grid2 container tw="w-full mx-4">
        <Unstable_Grid2>
          <Typography variant="h6" component={"h6"} tw="text-sm">
            © 2023 Dagwa. All rights reserved
          </Typography>
        </Unstable_Grid2>
      </Unstable_Grid2>
    </footer>
  )
}
