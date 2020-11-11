require ('dotenv').config()
const axios = require('axios')
const dbot = require('dbot-js')
const { static } = require('express')
const Telegram = require('node-telegram-bot-api')
let url = process.env.baseUrl
const token = process.env.bot_key
const qs = require ('qs')

const talikasih_bot= new Telegram(token,{polling:true})
talikasih_bot.on('message', function(message){
    let chatId = message.chat.id
    console.log(message.text);
    // let r = axios.get (`${url}/discover/all/1`).then(response => {
    //     let a = response.data;
    //     console.log(a);
    // })
    let a = "halo"
    dbot.get_response(message, async function(err, a){
        let r = await axios.get (`${url}/discover/all/1`)
        let s = r.data
        s.forEach(el => {
            console.log(el);
        })
        console.log(r.data.goal);
        if (!err) {
            talikasih_bot.sendMessage(chatId, a)
        } else {
            console.log(err);
        }

        })
    
    })
