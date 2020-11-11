require ('dotenv').config()
const dbot = require('dbot-js')
const Telegram = require('node-telegram-bot-api')

const token = process.env.bot_key

const talikasih_bot= new Telegram(token,{polling:true})
// talikasih_bot.on("polling_error", (err) => console.log(err));

// return
talikasih_bot.on('message', function(message){
    let chatId = message.chat.id
    // console.log(chatId);
    // let message = message.text
    console.log(message.text);
    // let result = "hai"
    dbot.get_response(message, function(err, result){
        if (!err) {
            // console.log(chatId);
            // console.log(message);
            talikasih_bot.sendMessage(chatId, result)
        } else {
            console.log(err);
        }
    })

})