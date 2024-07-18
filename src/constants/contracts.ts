import { tomo, tomoTestnet } from "@/configs/tomo.config"
import { Address } from "viem"
import { avalanche, avalancheFuji } from "wagmi/chains"

export const AddressZero = "0x0000000000000000000000000000000000000000" as Address
export const AddressLoya3Router = "0x9bb24C58CBea2aBBa14c1d97D1a4dd09ff14d701" as Address
export const AddressLoya3Router_MAINNET = "0xBe661d64940e3195D6EaE2fCd38ddF1E1A74059a" as Address
export const AddressLOYA = "0x6E43702B352BD9E2A69b3FBfCB404eA6fd0d4995" as Address
export const MULTICALL = "0xA8168013264122eF511f8f50fbaaD63A306CD488" as Address
export const MULTICALL_MAINNET = "0x4ABea257837494Dc920750C15b9AC0DFd88b6F23" as Address

export const CONTRACTS = {
  MULTICALL: {
    [avalancheFuji.id]: "",
    [avalanche.id]: AddressZero,
  },
  ADDRESS_LOYA: {
    [tomo.id]: AddressLOYA,
    [tomoTestnet.id]: AddressLOYA,
  },
  ADDRESS_LOYA3_ROUTER: {
    [tomo.id]: AddressLoya3Router_MAINNET,
    [tomoTestnet.id]: AddressLoya3Router,
  },

  AVEN_TOKEN: {
    [avalancheFuji.id]: "0x0076D02bF07b22c50E84d2f0d2674232288a9b9A",
    [avalanche.id]: AddressZero,
  },
  UAVEN_TOKEN: {
    [avalancheFuji.id]: "0xc7b35a910e5c665f43796B40EfF014B7669502A6",
    [avalanche.id]: AddressZero,
  },
  FREEMINT: {
    [avalancheFuji.id]: "0xCA25691B04d8cF15dC67c0638216181EFd327B22",
    [avalanche.id]: "0x431Ba9Fea784692fe121E0d36bA350625e01b2D3",
  },
  COLLECTION_AVEN: {
    [avalancheFuji.id]: "0x6c95b361d437d8031c64a5ec122a279bdfb1e20a",
    [avalanche.id]: "0x6edb9c74f1f495ffacceb207a5f947961698bff8",
  },
  EVOLVE: {
    [avalancheFuji.id]: "0x2162CEE9509A625aE821d02e4c9484E705080718",
    [avalanche.id]: AddressZero,
  },
  MINT_EVOLVE: {
    [avalancheFuji.id]: "0xB66Bf0b9164D2aE462fD6e13963C123DF9ddE013",
    [avalanche.id]: AddressZero,
  },
  COLLECTION_EVOLVE: {
    [avalancheFuji.id]: "0x315378127f4c157e93de4fea0ce9472136bf44f5",
    [avalanche.id]: AddressZero,
  },
  LAND_EVOLVE: {
    [avalancheFuji.id]: "",
    [avalanche.id]: AddressZero,
  },
  DATA_REGISTRY_V2: {
    [avalancheFuji.id]: "0xbeA78D4a6609D00122600D28820386CD8500c296",
    [avalanche.id]: "0x53cCC1E3f61C24e53F7F1844C1954A7DdCb77846",
  },
  BRIDGE_REGISTRY: {
    [avalancheFuji.id]: "0x6ea2973fD6Ad10d67620093e912264Af98414e31",
    [avalanche.id]: "0x77fF8A43A19F354c35f13C8182d1C03cB064Ab6B",
  },
  FOUNDATION: {
    [avalancheFuji.id]: "0x6EF6EE9B197E8c36DF8F342D41916618e887E326",
    [avalanche.id]: "",
  },
  DAO_VOTING: {
    [avalancheFuji.id]: "0x1c5A7c670C1392D8BcFb5ECC5696260B80308aCf",
    [avalanche.id]: AddressZero,
  },
  VOUCHER: {
    [avalancheFuji.id]: "0xf47CAE1e3359D48a250CD32A6D6e59d90dFEe240",
    [avalanche.id]: AddressZero,
  },
}
