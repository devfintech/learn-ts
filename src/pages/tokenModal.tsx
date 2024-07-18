/* eslint-disable unicorn/filename-case */
import { Modal } from "antd"
import axios from "axios"
import React, { useEffect, useState } from "react"

interface Token {
  symbol: string
  name: string
  address: string
}

interface TokenModalProps {
  open: boolean
  onSelectToken: (token: Token) => void
}

const TokenModal: React.FC<TokenModalProps> = ({ open, onSelectToken }) => {
  const [tokens, setTokens] = useState<Token[]>([])
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await axios.get<Token[]>("https://api.example.com/tokens") // Thay thế URL này bằng API thật của bạn
        setTokens(response.data)
      } catch (error) {
        console.error("Error fetching tokens", error)
      }
    }

    fetchTokens()
    console.log("token: ", tokens)
  }, [])

  const filteredTokens = tokens.filter(
    (token) =>
      token.name.toLowerCase().includes(search.toLowerCase()) ||
      token.symbol.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <Modal open={open} title="Select Token">
      <h2>Select Token</h2>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for a token" />
      <ul>
        {filteredTokens.map((token) => (
          <li key={token.address} onClick={() => onSelectToken(token)}>
            {token.name} ({token.symbol})
          </li>
        ))}
      </ul>
      <button>Close</button>
    </Modal>
  )
}

export default TokenModal
