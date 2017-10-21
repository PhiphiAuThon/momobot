const Discord = require('discord.js');
const bot = new Discord.Client();
var func = require('./functions');

const PREFIX = '<@370238406820888577>';

bot.on('ready',() =>{
	console.log('Momo is ready!');
});

bot.on('message', function(message) {
	if(message.content === 'ping'){
		message.reply('pong');
	}
});

bot.login(process.env.BOT_TOKEN);