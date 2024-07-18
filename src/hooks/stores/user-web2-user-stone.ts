import { storageKeyConfigs, storageKeys, storagePrefix } from "@/configs/storage.config"
import { Service } from "@/services/app.service"
import { toastContent } from "@/utils/toast"
import { toast } from "react-toastify"
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

export const useUserWeb2Store = create<any>()(
  devtools(
    persist(
      (set, get) => {
        return {
          token: undefined,
          expiredAt: undefined,
          geo: undefined,
          ipAddr: undefined,
          userInfo: undefined,

          reset() {
            set({
              token: undefined,
              expiredAt: undefined,
              geo: undefined,
              ipAddr: undefined,
            })
          },

          async login(data: { email: string; password: string }) {
            try {
              const response = await Service.web2Auth.login(data)
              console.log("🚀 ~ login ~ response:", response)
              if (response.data) {
                toastContent({ type: "success", message: "Logged in succesfully" }, { toastId: "login_successfully" })
                set({ token: response?.data?.token, ...response?.data?.userInfo })
                console.log("🚀 ~ login ~ response?.data?.token:", response?.data?.token)
                return true
              }
              toastContent(
                { type: "error", message: "Email or password wrong, try again later." },
                { toastId: "login-failed" },
              )
              return false
            } catch (error) {
              toast.error("Email or password wrong, try again later.3", { toastId: "login-failed" })
              console.log("error", error)
              return false
            }
          },

          logout() {
            get().reset()
          },

          async refreshUserInfo() {
            try {
              const response = await Service.web2Auth.getUserInfo()
              if (response.data) {
                set({ ...get(), userInfo: response.data })
              }
            } catch (error) {
              console.log("error", error)
            }
          },

          async register(data: any) {},
          async forgotPassword(data: any) {
            return false
          },
          async getVerifyEmailCode(data: any) {
            return false
          },
          async getVerityForgotPasswordCode(data: any) {
            return false
          },
        }
      },
      {
        name: storageKeys.userWeb2,
      },
    ),
    {
      name: storagePrefix,
      store: storageKeyConfigs.userWeb2,
    },
  ),
)
