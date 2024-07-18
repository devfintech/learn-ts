import { useCallback } from "react"
import { Address, decodeFunctionResult, encodeFunctionData } from "viem"

import { multicallABI } from "@/constants/abi/multicall"
import { useContractAddresses } from "../address/use-contract-addresses"
import { useClientStore } from "../stores/use-client-store"

export type CallParams = {
  functionName: string
  address: Address
  args?: any[]
  abi?: any
}[]

export const useMulticall = () => {
  const { publicClient, chain } = useClientStore()

  const { MULTICALL } = useContractAddresses()

  const handleMulticallContracts = useCallback(
    async <T = any | undefined>(calls: CallParams, defaultAbi?: any) => {
      if (!publicClient || !publicClient?.readContract) return

      const callData = calls.map((call) => {
        return {
          target: call.address.toLowerCase() as Address,
          callData: encodeFunctionData({
            abi: call?.abi ?? defaultAbi,
            functionName: call.functionName,
            args: call?.args ?? [],
          }),
        }
      })

      const aggregateResponse = await publicClient.readContract({
        abi: multicallABI,
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        functionName: "aggregate",
        args: [callData],
      })

      const txEncodedList = aggregateResponse[1]

      // Decode transaction response
      const response = txEncodedList.map(function (txEndcoded: any, index: number) {
        return decodeFunctionResult({
          abi: calls[index]?.abi ?? defaultAbi,
          data: txEndcoded,
          functionName: calls[index].functionName,
        })
      })

      return response as T
    },
    [MULTICALL, publicClient],
  )

  return { multicall: handleMulticallContracts }
}
