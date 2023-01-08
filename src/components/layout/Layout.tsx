import "twin.macro"

import { FC, PropsWithChildren } from "react"

import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
