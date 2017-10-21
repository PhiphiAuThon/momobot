const Discord = require('discord.js');
const bot = new Discord.Client();
var func = require('./functions');

const PREFIX = '<@370238406820888577>';

bot.on('ready',() =>{
	console.log('Momo is ready!');
});

bot.on('message', function(user, userID, channelID, message, evt) {

	var msg = message.split(' ');
    if(msg[0].toLowerCase() != PREFIX.toLowerCase()) return;

    var message_index = 0;
    for (i = 0; i < msg.length; i++) {
    	switch (msg[i].toLowerCase()){
    		case 'panini': 
    			message_index = 1;
    			break;
    		case 'mixtape':
    			message_index = 2;
    			break;
    		case 'yare':
    			message_index = 3;
    			break;
    		case 'hana':
    			message_index = 3;
    			break;
    		case 'pense':
    			message_index = 4;
    			break;
    		case 'penses':
    			message_index = 4;
    			break;
    		default:
    			break;
    	}
    	// A garder?
    	//if(message_index != 0)
    	//	break;
    }

	//var answer ;//= //func.give_answer(message_index,user);

	if(msg[1] === 'ping'){
		message.reply('TA GUEULE PUTAIN'); //answer = 'pang';
	}

    //bot.sendMessage({to: channelID,message: answer});
});

bot.login(process.env.BOT_TOKEN);