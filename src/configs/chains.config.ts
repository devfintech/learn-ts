import { Chain, avalanche, avalancheFuji } from "wagmi/chains"

import { ENV, Env } from "./env.config"

// const ChainConfig = <const>{
//   [Env.development]: baseGoerli,
//   [Env.staging]: base,
//   [Env.production]: base,
// }

// const supportedChainsConfig = {
//   [Env.development]: [baseGoerli, base, bsc, bscTestnet],
//   [Env.staging]: [baseGoerli, base, mainnet, bsc, bscTestnet, fantom, fantomTestnet],
//   [Env.production]: [base],
// }

const ChainConfig = <const>{
  [Env.development]: {
    ...avalancheFuji,
  },
  [Env.staging]: avalanche,
  [Env.production]: avalanche,
}
const supportedChainsConfig = {
  [Env.development]: [
    {
      ...avalancheFuji,
    },
  ],
  [Env.staging]: [avalanche],
  [Env.production]: [avalanche],
}

export const supportedChains: Chain[] = supportedChainsConfig[ENV]

export const defaultChain = ChainConfig[ENV]
