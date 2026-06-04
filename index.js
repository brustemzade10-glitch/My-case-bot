const TelegramBot = require('node-telegram-bot-api');
const token = '8624933164:AAE3x266mB4UTp-T6LX6QghY4QBUM1AVWzo';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Kasanı açmaq üçün aşağıdakı düyməni sıx!", {
        reply_markup: {
            inline_keyboard: [[
                { text: "Kasanı Aç", web_app: { url: "https://my-case-bot.vercel.app/" } }
            ]]
        }
    });
});
