import { BaseRoute } from "@/types/core.type"

export const routePath = {
  home: "/",
  translation: "/translation",
  rechart: "/rechart",
  todoList: "/todolist",
  timer: "/timer",
  wheel: "/wheel",
  quizapp: "/quizapp",
  qrcode: "/qrcode",
  webgame: "/webgame",
  soleague: "/soleague",
  bottompage: "/bottompage",
  notFound: "*",
} as const

export const routes: BaseRoute[] = [
  { label: "Home", to: routePath.home },
  { label: "Translation", to: routePath.translation },
  { label: "Rechart", to: routePath.rechart },
  { label: "Todo List", to: routePath.todoList },
  { label: "Timer", to: routePath.timer },
  { label: "Wheel", to: routePath.wheel },
  { label: "Quiz App", to: routePath.quizapp },
  { label: "QR Code", to: routePath.qrcode },
  { label: "Web Game", to: routePath.webgame },
  { label: "Soleague", to: routePath.soleague },
  { label: "Bottom Page", to: routePath.bottompage },
]
