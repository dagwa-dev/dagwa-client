import { CommonModel } from "./common"

export type Chain =
  | CommonModel & {
      networkId: string
      name: string
      website: string
      unit: string
      backgroundColor: string
      background: string
      color: string
      colorLogo: string
      explorer: string
      logo: string
      supportToken: boolean
    }
