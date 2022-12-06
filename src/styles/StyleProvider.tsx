import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import { StyledEngineProvider, ThemeProvider } from "@mui/material"
import { PropsWithChildren } from "react"

import GlobalStyles from "./GlobalStyles"
import MuiTheme from "./MuiTheme"

export const muiCache = createCache({
  key: "mui",
  prepend: true,
})

interface StyleProviderProps extends PropsWithChildren {}

const StyleProvider = ({ children }: StyleProviderProps) => (
  <CacheProvider value={muiCache}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={MuiTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  </CacheProvider>
)

export default StyleProvider
