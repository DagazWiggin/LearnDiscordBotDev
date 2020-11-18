const Discord = require('discord.js');
const bot = new Discord.Client();
const token = '.'

bot.login(token);

bot.on('ready', ()=>{
    console.log('Ready for use')
})

bot.on('message', msg => {
    if(msg.content === 'Hi'){
        msg.reply('Hi User, welcome to Channel')
    }
})