import { http } from "@/libs/axios"
import { User } from "@/types/auth.type"

export class AuthService {
  getNonce(address: string) {
    return http.request<{
      nonce: string
    }>({
      method: "GET",
      url: "/auth/get-nonce/",
      params: {
        address,
      },
    })
  }

  login(address: string, sign: string) {
    return http.request<{
      userInfo: User
      token: string
    }>({
      method: "POST",
      url: "/auth/login/",
      data: {
        address,
        sign,
      },
    })
  }
}
