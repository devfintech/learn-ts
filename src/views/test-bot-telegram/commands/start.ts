import { Context, Telegraf } from "telegraf"

const startCommand = (bot: Telegraf<Context>) => {
  bot.start((ctx) => {
    ctx.reply("Welcome to BeraSig Wallet! Use /menu to see options.")
  })
}

export default startCommand
