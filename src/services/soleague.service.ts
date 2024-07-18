import { axiosInstance } from "@/libs/axios/axios-instance"

export interface TeamData {
  id: number
  image: null | string
  name: string
  nftHolders?: number
  status?: number
  createdTime?: string
  updatedTime?: string
  holdersCount?: number | null
  totalNftsCount?: number | null
  userNftsCount?: number | null
  totalPoints?: number
  userPoints?: number
  playingTeam?: {
    name?: string
    image?: string
    id?: number
  }
  winningTeam?: {
    id?: number
    name?: string
    image?: string
  }
  nextTeam?: {
    id?: number
    name?: string
    image?: string
  }
}
export class SoleagueService {
  async getTeams(leagueId: string | number) {
    const { data } = await axiosInstance.request<TeamData[]>({
      method: "GET",
      url: "/team/list",
      params: {
        leagueId,
      },
    })
    return data
  }

  async getTeamDetail(id: number) {
    const { data } = await axiosInstance.request({
      method: "GET",
      url: `/team/${id}/get`,
    })
    return data
  }
  async getTeamDetailList(leagueId: string | number) {
    const { data } = await axiosInstance.request<TeamData[]>({
      method: "GET",
      url: "/team/list-detail",
      params: {
        leagueId,
      },
    })
    return data
  }
}
