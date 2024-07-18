import GameList from "@/components/GameList"
import withErrorBoundary from "@/hoc/withErrorBoundary"
import { ReactElement } from "react"

const WebGame = (): ReactElement => <GameList />

export default withErrorBoundary(WebGame)
