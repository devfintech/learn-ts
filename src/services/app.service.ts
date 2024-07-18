import { AnalyticsService } from "./analytics.service"
import { AuthService } from "./auth.service"
import { SoleagueService } from "./soleague.service"
import { UserService } from "./user.service"
import { Web2AuthService } from "./web2-auth.service"

export const Service = {
  auth: new AuthService(),
  user: new UserService(),
  web2Auth: new Web2AuthService(),
  analytic: new AnalyticsService(),
  soleague: new SoleagueService(),
}
