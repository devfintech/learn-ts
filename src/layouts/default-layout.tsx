import Header from "@/components/layouts/header"
import { FC } from "react"
import { Outlet } from "react-router-dom"

interface DefaultLayoutProps {}

const DefaultLayout: FC<DefaultLayoutProps> = () => {
  return (
    <div>
      <Header />
      <main className="">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default DefaultLayout
