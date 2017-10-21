const Discord = require('discord.js');
const bot = new Discord.Client();
var func = require('./functions');

const PREFIX = '<@370238406820888577>';

bot.on('ready',() =>{
	console.log('Momo is ready!');
});

bot.on('message', function(user, userID, channelID, message, evt) {

	var answer ;//= //func.give_answer(message_index,user);

	if(message.content === 'ping'){
		answer = 'pang';
	}

    bot.sendMessage({to: channelID,message: answer});
});

bot.login(process.env.BOT_TOKEN);