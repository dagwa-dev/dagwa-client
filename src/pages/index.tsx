import "twin.macro"

import AdbIcon from "@mui/icons-material/Adb"
import MenuIcon from "@mui/icons-material/Menu"
import { Typography, Unstable_Grid2 } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Toolbar from "@mui/material/Toolbar"
import Tooltip from "@mui/material/Tooltip"
import { CryptoCurrencyCard } from "components/card/CryptoCurrencyCard"
import { CRYPTO_CURRENCY_SYMBOL } from "components/icon/CryptoCurrencyIcon/constants"
import { CryptoCurrencySymbol } from "components/icon/CryptoCurrencyIcon/type"
import { FC, MouseEvent, PropsWithChildren, useState } from "react"
import { genUniqueRandomNumArr } from "utils/common"

const pages = ["Products", "Pricing", "Blog"]
const settings = ["Profile", "Account", "Dashboard", "Logout"]

const majorCryptoCurrenciesTop4: CryptoCurrencySymbol[] = [
  "BTC",
  "ETH",
  "BNB",
  "MATIC",
]

const IntroductionSection = () => {
  const randomNumArr12 = genUniqueRandomNumArr(
    12,
    CRYPTO_CURRENCY_SYMBOL.length,
  )

  const randomCryptoCurrencies = randomNumArr12.map(
    (randomNum) => CRYPTO_CURRENCY_SYMBOL[randomNum],
  )

  return (
    <section tw="w-full flex items-center bg-gray-100 py-8">
      <div tw="w-full items-center xl:w-1/2">
        <Typography
          tw="text-center font-extrabold text-4xl"
          variant="h2"
          component={"h2"}>
          The Decentralized Application List
        </Typography>
      </div>
      <div tw="w-full items-center hidden xl:block xl:w-1/2">
        <Unstable_Grid2 container spacing={2} tw="flex justify-center">
          {majorCryptoCurrenciesTop4.map((symbol) => (
            <Unstable_Grid2 key={symbol} tw="flex justify-center">
              <CryptoCurrencyCard symbol={symbol} size={48} />
            </Unstable_Grid2>
          ))}
          <Unstable_Grid2 tw="flex justify-center w-12" />
        </Unstable_Grid2>
        <Unstable_Grid2 container spacing={2} tw="flex justify-center">
          <Unstable_Grid2 tw="flex justify-center w-12" />
          {randomCryptoCurrencies.slice(0, 4).map((symbol) => (
            <Unstable_Grid2 key={symbol} tw="flex justify-center">
              <CryptoCurrencyCard symbol={symbol} size={48} />
            </Unstable_Grid2>
          ))}
        </Unstable_Grid2>
        <Unstable_Grid2 container spacing={2} tw="flex justify-center">
          {randomCryptoCurrencies.slice(4, 8).map((symbol) => (
            <Unstable_Grid2 key={symbol} tw="flex justify-center">
              <CryptoCurrencyCard symbol={symbol} size={48} />
            </Unstable_Grid2>
          ))}
          <Unstable_Grid2 tw="flex justify-center w-12" />
        </Unstable_Grid2>
        <Unstable_Grid2 container spacing={2} tw="flex justify-center">
          <Unstable_Grid2 tw="flex justify-center w-12" />
          {randomCryptoCurrencies.slice(8, 12).map((symbol) => (
            <Unstable_Grid2 key={symbol} tw="flex justify-center">
              <CryptoCurrencyCard symbol={symbol} size={48} />
            </Unstable_Grid2>
          ))}
        </Unstable_Grid2>
      </div>
    </section>
  )
}

const RoadmapSection = () => {
  return (
    <section>
      <Unstable_Grid2 container tw="w-full flex-col items-center">
        <Unstable_Grid2 tw="pb-0 text-center text-2xl" xs={4} sm={4} md={4}>
          RoadmapSection
        </Unstable_Grid2>
      </Unstable_Grid2>
    </section>
  )
}

const PricingSection = () => {
  return (
    <section>
      <Unstable_Grid2 container tw="w-full flex-col items-center">
        <Unstable_Grid2 tw="pb-0 text-center text-2xl" xs={4} sm={4} md={4}>
          PricingSection
        </Unstable_Grid2>
      </Unstable_Grid2>
    </section>
  )
}
const SubscribeSection = () => {
  return (
    <section tw="w-full flex items-center bg-white py-8">
      <Unstable_Grid2 container tw="w-full flex-col items-center">
        <Unstable_Grid2 tw="pb-0 text-center text-2xl" xs={4} sm={4} md={4}>
          SubscribeSection
        </Unstable_Grid2>
      </Unstable_Grid2>
    </section>
  )
}

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static" tw="bg-white">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            tw="mr-2 flex-grow font-mono no-underline"
            sx={{
              display: { xs: "flex", md: "none" },
            }}>
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Tooltip key={page} title="Coming soon">
                <Button
                  onClick={handleCloseNavMenu}
                  tw="my-2 text-black block text-sm">
                  {page}
                </Button>
              </Tooltip>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Coming soon">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              // open={Boolean(anchorElUser)}
              open={false}
              onClose={handleCloseUserMenu}>
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
const Footer = () => {
  return (
    <footer>
      <Unstable_Grid2 container tw="w-full flex-col items-center">
        <Unstable_Grid2 tw="pb-0 text-center text-2xl" xs={4} sm={4} md={4}>
          Footer
        </Unstable_Grid2>
      </Unstable_Grid2>
    </footer>
  )
}

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

const Home = () => {
  return (
    <Layout>
      <IntroductionSection />
      {/* <RoadmapSection /> */}
      {/* <PricingSection /> */}
      <SubscribeSection />
    </Layout>
  )
}

export default Home
