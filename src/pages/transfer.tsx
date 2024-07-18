import useTransferToken from "@/hooks/use-transfer"
import { Button } from "@/libs/ui/button"
import Modal from "@/libs/ui/modal"
import { useState } from "react"

const Transfer = ({ tokenId }: { tokenId: string }) => {
  const [address, setAddress] = useState("")
  const { transfer, openModal, setOpenModal } = useTransferToken(tokenId)
  return (
    <>
      <Button className="" onClick={() => setOpenModal(true)}>
        Transfer
      </Button>
      <Modal open={openModal} onCancel={() => setOpenModal(false)} closeIcon={false}>
        <div className="bg-primary-50 flex max-w-lg flex-col gap-6 rounded-lg p-6">
          <div className="text-xl font-bold text-stone-950">Transfer</div>
          <input
            type="text"
            placeholder="ID Wallet"
            className="outline-primary-500 px-3 py-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button type={"primary"} onClick={() => transfer(address)}>
            Transfer
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default Transfer
