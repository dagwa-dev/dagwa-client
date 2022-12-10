import { Global } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import tw, { css, GlobalStyles as BaseStyles, theme } from "twin.macro"

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    background: theme`colors.gray.100`,
    ...tw`antialiased`,
  },
})

const GlobalStyles = () => (
  <>
    <CssBaseline enableColorScheme />
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
