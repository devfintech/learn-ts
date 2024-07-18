export interface UserWeb2 {
  token: string
  userInfo: {
    id: number
    email: string
    name: string
    created_time: string
    updated_time: string
    status: number
    address: string
  }
  expiredAt: string | number
  geo: {
    range: Array<string | number>
    country: string
    region: string
    eu: string
    timezone: string
    city: string
    ll: Array<string | number>
    metro: number
    area: number
  }
  ipAddr: string
}

export interface UserStoneWeb2 extends Partial<UserWeb2> {
  reset(): void
  login(data: { email: string; password: string }): Promise<boolean>
  // register(data: { email: string; password: string; code: string }): Promise<boolean>
  // forgotPassword(data: { email: string; code: string; password: string }): Promise<any>
  // getVerifyEmailCode(data: { email: string }): Promise<boolean>
  // getVerifyForgotPasswordCode(data: { email: string }): Promise<boolean>
  logout(): void
  refreshUserInfo(): void
}
