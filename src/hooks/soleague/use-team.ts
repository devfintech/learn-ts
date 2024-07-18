import { Service } from "@/services/app.service"
import { useParams } from "react-router-dom"
import useSWR from "swr"

export const useTeams = (leagueId?: number) => {
  const { id: leagueIdParam } = useParams()
  const _leagueId = leagueId ?? leagueIdParam
  const response = useSWR(["get-teams", _leagueId], async () => {
    if (!_leagueId) return
    const data = await Service.soleague.getTeams(_leagueId)
    console.log("team: ", data)
    return data
  })
  return response
}
