import { CommonModel } from "./common"

export type DApp =
  | CommonModel & {
      backgroundColor: string
      color: string
      desc: string
      logo: string
      marker: string
      name: string
      summary: string
      website: string
    }
