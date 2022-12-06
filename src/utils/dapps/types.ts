import { CategoryInterests, OfficialLinks } from "utils/common/types"
import { Token } from "utils/tokens/types"

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
