import { Context, Telegraf } from "telegraf"

const menuCommand = (bot: Telegraf<Context>) => {
  bot.command("menu", (ctx) => {
    ctx.reply("Choose an option:", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Asset", callback_data: "asset" }],
          [{ text: "Guild", callback_data: "guild" }],
          [{ text: "Earn", callback_data: "earn" }],
          [{ text: "Quest", callback_data: "quest" }],
          [{ text: "Friend", callback_data: "friend" }],
        ],
      },
    })
  })
}

export default menuCommand
