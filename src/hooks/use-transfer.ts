import { transferAbi } from "@/constants/abi/amm/transfer"
import { Modal, message } from "antd"
import { useState } from "react"
import { isAddress } from "viem"
import { useContractAddresses } from "./address/use-contract-addresses"
import { useClientStore } from "./stores/use-client-store"

const useTransferToken = (tokenId: string) => {
  const { publicClient, walletClient, account } = useClientStore()
  const { AVEN_TOKEN, MULTICALL, UAVEN_TOKEN, EVOLVE } = useContractAddresses()

  const [openModal, setOpenModal] = useState(false)

  const transfer = async (toAddress: string) => {
    if (walletClient !== undefined && account !== undefined) {
      if (!isAddress(toAddress)) {
        message.error("Address invalid")
        return
      }
      setOpenModal(false)
      //   Modal.loading("Transfer", "You have just Transfer")
      try {
        const hash = await walletClient.writeContract({
          abi: transferAbi,
          address: UAVEN_TOKEN,
          functionName: "transferFrom",
          args: [account, toAddress, BigInt(tokenId ?? "")],
        })
        const { status, logs } = await publicClient.waitForTransactionReceipt({
          hash,
        })
        console.log("hihasdas: ", status)
        Modal.destroyAll()
      } catch (error) {
        console.log("🚀 ~ transfer ~ error:", error)
      }
    }
  }
  return { transfer, openModal, setOpenModal }
}

export default useTransferToken
