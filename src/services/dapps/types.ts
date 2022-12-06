import { Dapp } from "utils/dapps/types"

export type GetDapp = (dappId: string) => Dapp | undefined
export type GetDapps = () => Dapp[]
export type GetDappsWithChain = (chainId: string) => Dapp[]