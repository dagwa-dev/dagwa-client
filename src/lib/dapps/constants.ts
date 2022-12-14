import { getTokenListWithTags } from "lib/tokens"

import { Dapp } from "./types"

export const dappList: Dapp[] = [
  {
    dappId: "1",
    name: "Reta",
    logoImgSrc: "",
    bio: "",
    chainIds: ["56"],
    tokens: getTokenListWithTags("retaverse"),
    categoryInterests: [],
    officialLinks: {
      twitter: "retawars",
      instagram: null,
      website: "retawars.com",
      github: null,
      discord: "W8K48gYW2U",
      facebook: "retawars",
      telegram: "retawars_official",
      cmc: "realital-metaverse",
      whitepaper: "whitepaper.retawars.com/NAZxkGlvEmfrUBtKzQpi",
    },
  },
]
