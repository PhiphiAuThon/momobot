const Discord = require('discord.js');
const bot = new Discord.Client();
var func = require('./functions');

const PREFIX = '<@370238406820888577>';

bot.on('ready',() =>{
	console.log('Momo is ready!');
});

bot.on('message',  function (user, userID, channelID, message, evt) {
/*if (message.substring(0, 1) == '!') { }*/
/*var args = message.content.substring(PREFIX.length).split(" "); */
 	message = message.split(' ');
    if(message[0].toLowerCase() != PREFIX.toLowerCase()) return;

    var message_index = 0;
    for (i = 0; i < message.length; i++) {
    	switch (message[i].toLowerCase()){
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

    answer = func.give_answer(message_index,user);

    bot.sendMessage({to: channelID,message: answer});

});

bot.login(process.env.BOT_TOKEN);