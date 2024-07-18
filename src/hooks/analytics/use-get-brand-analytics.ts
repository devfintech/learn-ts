import { Service } from "@/services/app.service"
import { toast } from "react-toastify"
import useSWR from "swr"

export function useGetBrandAnalytics() {
  const {
    data,
    mutate: refetch,
    isLoading,
  } = useSWR(["get-brand-analytics"], async () => {
    try {
      const response = await Service.analytic.getBrand()
      if (!response) {
        toast.error("Get brand failed")
        return undefined
      }
      console.log("aaaab: ", response.data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  })
  return { data, refetch, isLoading }
}
