import { http } from "@/libs/axios"
import { UserWeb2 } from "@/types/web2-auth.type"

export class Web2AuthService {
  login(data: { email: string; password: string }) {
    return http.request<UserWeb2>({
      method: "POST",
      url: "/admin-performance/login",
      data,
    })
  }
  getUserInfo() {
    return http.request<any>({
      method: "GET",
      url: "/user/get-with-address",
    })
  }
}
