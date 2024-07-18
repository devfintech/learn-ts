import { Telegraf } from "telegraf"
import menuCommand from "./commands/menu"
import startCommand from "./commands/start"
import { BOT_TOKEN } from "./config"
// Import các lệnh khác từ thư mục commands

const bot = new Telegraf(BOT_TOKEN)

startCommand(bot)
menuCommand(bot)
// Gọi các lệnh khác

bot.action("asset", (ctx) => ctx.reply("You chose Asset!"))
bot.action("guild", (ctx) => ctx.reply("You chose Guild!"))
bot.action("earn", (ctx) => ctx.reply("You chose Earn!"))
bot.action("quest", (ctx) => ctx.reply("You chose Quest!"))
bot.action("friend", (ctx) => ctx.reply("You chose Friend!"))

bot.launch().then(() => {
  console.log("Bot started")
})

process.once("SIGINT", () => bot.stop("SIGINT"))
process.once("SIGTERM", () => bot.stop("SIGTERM"))
 