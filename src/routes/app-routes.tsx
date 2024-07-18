import { FC } from "react"
import { RouteObject, useRoutes } from "react-router-dom"

import { Timer } from "@/components/modals/timer"
import DefaultLayout from "@/layouts/default-layout"
import EmptyLayout from "@/layouts/empty-layout"
import TodoListProject from "@/pages/TodoListProject"
import HomePage from "@/pages/home"
import NotFoundPage from "@/pages/not-found"
import RechartPage from "@/pages/rechart"
import Wheel from "@/pages/spinWeel"
import TranslationPage from "@/pages/translation"
import QrCodeGenerator from "@/views/qrcode"
import QuizApp from "@/views/quiz_app"
import SoleaguePage from "@/views/soleague"
import BottomPage from "@/views/test-page-bottom"
import WebGame from "@/views/webgame"
import { routePath } from "./routes"

interface AppRoutesProps {}

const routes: RouteObject[] = [
  // Routes with default layout
  {
    element: <DefaultLayout />,
    children: [
      { path: routePath.home, element: <HomePage /> },
      { path: routePath.translation, element: <TranslationPage /> },
      { path: routePath.rechart, element: <RechartPage /> },
      { path: routePath.todoList, element: <TodoListProject /> },
      { path: routePath.timer, element: <Timer /> },
      { path: routePath.wheel, element: <Wheel /> },
      { path: routePath.quizapp, element: <QuizApp /> },
      { path: routePath.qrcode, element: <QrCodeGenerator /> },
      { path: routePath.webgame, element: <WebGame /> },
      { path: routePath.soleague, element: <SoleaguePage /> },
      { path: routePath.bottompage, element: <BottomPage /> },
    ],
  },

  // Routes with empty layout
  {
    element: <EmptyLayout />,
    children: [{ path: routePath.notFound, element: <NotFoundPage /> }],
  },
]

const AppRoutes: FC<AppRoutesProps> = () => {
  const appRoutes = useRoutes(routes)

  return appRoutes
}

// Or
// const AppRoutes: FC<AppRoutesProps> = () => {
//   return (
//     <Routes>
//       {/* Routes with default layout */}
//       <Route element={<DefaultLayout />}>
//         <Route path={routePath.home} element={<HomePage />} />
//         <Route path={routePath.translation} element={<TranslationPage />} />
//       </Route>

//       {/* Routes with empty layout */}
//       <Route element={<EmptyLayout />}>
//         <Route path={routePath.notFound} element={<NotFoundPage />} />
//       </Route>
//     </Routes>
//   )
// }

export default AppRoutes
