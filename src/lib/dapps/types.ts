import { CategoryInterests, OfficialLinks } from "lib/common/types"
import { Token } from "lib/tokens/types"

export type Dapp = {
  dappId: string
  name: string
  chainIds: string[]
  tokens: Token[]
  categoryInterests: CategoryInterests[]
  logoImgSrc: string | null
  bio: string | null
  officialLinks: OfficialLinks
}
