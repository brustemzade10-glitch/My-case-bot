const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();
const bot = new TelegramBot('8624933164:AAE3x266mB4UTp-T6LX6QghY4QBUM1AVWzo', {polling: true}); // Tokenini unutma!

app.use(express.json());

// Oyun məntiqi (API)
app.post('/api/spin', (req, res) => {
    // Burada 2 ulduzun olduğunu fərz edirik
    let userStars = 2; 
    const cost = 1;

    if (userStars >= cost) {
        userStars -= cost;
        const prizes = ["Helmet", "Diamond", "Cat", "Gold", "Bag"];
        const win = prizes[Math.floor(Math.random() * prizes.length)];
        res.json({ success: true, prize: win, newBalance: userStars });
    } else {
        res.json({ success: false, message: "Ulduzun çatışmır!" });
    }
});

// Botun düyməsi
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Kasanı açmaq üçün aşağıdakı düyməni sıx!", {
        reply_markup: {
            inline_keyboard: [[{ text: "Kasanı Aç", web_app: { url: "https://my-case-bot.vercel.app/" } }]]
        }
    });
});

app.listen(3000, () => console.log('Server işləyir...'));
