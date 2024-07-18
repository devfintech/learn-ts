import { Chain } from "viem"

export const tomoTestnet: Chain = {
  id: 89,
  name: "TOMO Chain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "TOMO",
    symbol: "TOMO",
  },
  network: "tomo",
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.tomochain.com"],
    },
    public: {
      http: ["https://rpc-testnet.viction.xyz/"],
    },
  },
  blockExplorers: {
    default: {
      url: "https://testnet.vicscan.xyz/",
      name: "TOMO Chain Testnet Explorer",
    },
  },
  testnet: true,
}

export const tomo: Chain = {
  id: 88,
  name: "VIC Chain Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "VIC",
    symbol: "VIC",
  },
  network: "vic-mainnet",
  rpcUrls: {
    default: {
      http: ["https://rpc.viction.xyz"],
    },
    public: {
      http: ["https://rpc.viction.xyz/"],
    },
  },
  blockExplorers: {
    default: {
      url: "https://vicscan.xyz/",
      name: "VIC Chain Mainnet Explorer",
    },
  },
  testnet: false,
}
