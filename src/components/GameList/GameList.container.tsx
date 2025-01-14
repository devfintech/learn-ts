/* eslint-disable unicorn/filename-case */

import { ChangeEvent, ReactElement, useCallback, useState } from "react"
import GameListRender from "./GameList.render"
import { Filter } from "./types"
import useFetch from "./use-fetch"

const GameListContainer = (): ReactElement => {
  const [filter, setFilter] = useState<Filter>({
    platform: "browser",
    sortBy: "relevance",
  })
  const { games, error } = useFetch(filter)

  const onFilterChange = useCallback((event: ChangeEvent<HTMLFormElement>) => {
    setFilter((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
    event.preventDefault()
  }, [])
  return <GameListRender err={error} games={games} onFilterChange={onFilterChange} />
}

export default GameListContainer
