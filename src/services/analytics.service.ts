import { api } from "@/constants/api"
import { http } from "@/libs/axios"
import { axiosInstance } from "@/libs/axios/axios-instance"

export class AnalyticsService {
  async getBrand() {
    const { data } = await axiosInstance.request({
      method: "GET",
      url: api.analytics.brand,
    })
    return data
  }

  getCustomer() {
    return http.request({
      method: "GET",
      url: api.analytics.customer,
    })
  }
  getTransaction() {
    return http.request({
      method: "GET",
      url: api.analytics.transaction,
    })
  }
}
export interface BrandInfo {
  activeBrands: number
  totalBrands: number
  totalNoTransactionBrands: number
  totalUninstalledBrands: number
}
export interface CustomerResponse {}
