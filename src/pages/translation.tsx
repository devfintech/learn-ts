import { FC, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { Container } from "@/components/layouts/container"
import { useContractAddresses } from "@/hooks/address/use-contract-addresses"
import { useTokenInfos } from "@/hooks/erc20/use-token-infos"
import { useClientStore } from "@/hooks/stores/use-client-store"
import { Button } from "@/libs/ui/button"
import { Input } from "@/libs/ui/input"
import { Space, Table } from "antd"
import axios from "axios"
import { useAccount, useConnect } from "wagmi"
import Transfer from "./transfer"

interface TranslationPageProps {}

const TranslationPage: FC<TranslationPageProps> = () => {
  useTranslation()

  const { AVEN_TOKEN, MULTICALL, UAVEN_TOKEN, EVOLVE } = useContractAddresses()
  const { publicClient, account } = useClientStore()

  // const { customTokenAdded } = useAddCustomToken()
  // console.log("🚀 ~ customTokenAdded:", customTokenAdded)
  // const response = useTokenInfos(AVEN_TOKEN)
  const token1 = useTokenInfos(UAVEN_TOKEN)
  const token2 = useTokenInfos(AVEN_TOKEN)

  // console.log("Name token: ", token1)

  const [data, setData] = useState([])
  const [records, setRecords] = useState([])

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos") /*https://jsonplaceholder.typicode.com/photos*/
      .then((res) => {
        setData(res.data)
        setRecords(res.data)
      })
      .catch((err) => console.log(err))
  }, [])
  // test.describe.parallel("API", () => {
  //   test("Get Request", async ({ request }) => {
  //     const response = await request.get("https://jsonplaceholder.typicode.com/photos")
  //     const res = JSON.parse(await response.text())
  //     console.log("hiha: ", res)
  //   })
  // })
  // console.log("data: ", data)

  const Search = (event: { target: { value: any } }) => {
    setRecords(data.filter((f) => f.title.toLowerCase().includes(event.target.value)))
  }
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (
        text:
          | string
          | number
          | boolean
          | ReactElement<any, string | JSXElementConstructor<any>>
          | Iterable<ReactNode>
          | ReactPortal
          | Iterable<ReactNode>
          | null
          | undefined,
      ) => <a>{text}</a>,
    },
    // {
    //   title: "Address",
    //   dataIndex: "address",
    //   key: "address",
    //   render: (address) => <a>{address.city}</a>,
    // },
    {
      title: "Image",
      dataIndex: "thumbnailUrl",
      key: "thumbnailUrl",
      render: (thumbnailUrl: string | undefined) => <img src={thumbnailUrl} />,
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Space>
      ),
    },
  ]

  // const start = () => {
  //   const a = window.setInterval(() => {})
  // }
  // const urlParam = new URLSearchParams()
  // const searchParam = new URLSearchParams()

  const [brand, setBrand] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://analytics-api.loya3.com/translation/get")
        setBrand(res.data)
        console.log("aaaa: ", res)
      } catch (error) {
        console.log("Error: ", error)
      }
    }
    fetchData()
  }, [])

  const { connectAsync } = useConnect()
  const { isConnected, address } = useAccount()

  const handleConnect = async () => {
    try {
      const { connector, account, chain } = await connectAsync()
      console.log("connnector: ", connector)
      console.log("Account: ", account)
      console.log("Chain: ", chain)
    } catch (error) {
      console.log("Failed to connect: ", error)
    }
  }

  return (
    <div>
      <Container>
        <div className="flex flex-col space-y-3 text-center text-xl">
          <p>{AVEN_TOKEN}</p>
          <p className="">Translate with : {brand}</p>
          <div className="flex items-center justify-center gap-4">
            <Input value={token1} />
            <Input value={token2} />
            <Transfer tokenId={AVEN_TOKEN} />
          </div>
          <p className="">{/* Translate with {"<Trans>"} : <Trans>Hello World</Trans> */}</p>
          {/* <p className="">Translate with dynamic params : {t("I'm {{years}} years old", { years: 36 })}</p> */}
        </div>
        {/* <Example /> */}
        <Input className="mb-4 w-1/3" onChange={Search} />
        <Table columns={columns} dataSource={records} />

        {/* <Example /> */}
        <div>
          {isConnected ? (
            <div>
              <p>Connected to {address}</p>
            </div>
          ) : (
            <button onClick={handleConnect}>Connect wallet</button>
          )}
        </div>
      </Container>
    </div>
  )
}

export default TranslationPage
