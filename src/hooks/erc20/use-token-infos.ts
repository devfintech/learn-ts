import { useSWR } from "@/libs/swr"
import { Address } from "viem"
import { erc20ABI } from "wagmi"
import { useMulticall } from "../multicall/use-multicall"
import { useClientStore } from "../stores/use-client-store"

// Muticall token infos with chain support function multicall3
export const useTokenInfos = (address: Address) => {
  const { multicall } = useMulticall()
  const { publicClient, account } = useClientStore()
  // console.log("🚀 ~ useTokenInfos ~ account:", account)

  // const { AVEN_TOKEN, UAVEN_TOKEN, COLLECTION_EVOLVE, BRIDGE_REGISTRY } = useContractAddresses()

  // const { data: tokenBalance } = useBalance({
  //   address: account,
  //   token: AVEN_TOKEN,
  // })

  // console.log("🚀 ~ useTokenInfos ~ tokenBalance:", tokenBalance)

  const { data, error } = useSWR(["token-infos", address, publicClient, account], async () => {
    if (!account) return
    const tx = await multicall([
      {
        address: address,
        abi: erc20ABI,
        functionName: "name",
        args: [],
      },
      {
        address: address,
        abi: erc20ABI,
        functionName: "decimals",
        args: [],
      },
      {
        address: address,
        abi: erc20ABI,
        functionName: "totalSupply",
        args: [],
      },
    ])
    return tx
  })
  console.log("🚀 ~ const{data,error} = useSWR ~ data:", data)

  return data
}
