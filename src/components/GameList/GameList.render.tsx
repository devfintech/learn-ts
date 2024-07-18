/* eslint-disable unicorn/filename-case */

import { Game } from "@/types"
import { ChangeEvent, ReactElement } from "react"
import GameCard from "../GameCard"
import GameFilter from "../GameFilter"

interface Props {
  err?: string
  games: Game[]
  onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void
}
const GameListRender = ({ err, games, onFilterChange }: Props): ReactElement => {
  if (err) {
    return <p>Error game</p>
  }
  if (!games.length) {
    return <p>Loading...</p>
  }
  return (
    <>
      <GameFilter onChange={onFilterChange} />
      <ul className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {games.map((game) => (
          <li key={game.id} className="list-none bg-gray-500">
            <GameCard content={game} />
          </li>
        ))}
      </ul>
    </>
  )
}
export default GameListRender
