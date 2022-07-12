const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '5447379768:AAERW5pE7mMkXZ1a8bfOhVTSFaZiowLrHoE';

const bot = new TelegramBot(TOKEN, {
    polling:true
});

bot.on('message', (msg)=>{
    const chatId = msg.chat.id;
    if(msg.text === 'Рандомне число'){
        let random = Math.floor(Math.random() * 1000);
        bot.sendMessage(chatId, random);
    }else{
        bot.sendMessage(chatId, 'Привіт '+msg.from.first_name, {
            reply_markup: {
                keyboard: [
                    ['Рандомне число', 'Підкинь монетку']
                ],
               resize_keyboard: true
            }
        })
  }
});





// /парне непарне
        // if(msg.text %2==0) {
        //     bot.sendMessage(chatId, 'парне');
        // }else{
        //     bot.sendMessage(chatId, 'непарне');
        // }
  