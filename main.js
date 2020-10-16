const Discord = require('discord.js');

const client = new Discord.Client();

//call bot command
const prefix='!';


client.once('ready', () => {
    console.log('kevin bot is online!');
});

client.on('message', message =>{

    /* to be fixed
    if(message == 'pog'){
        message.channel.send('poggers');
    } */
    //ignore if no prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //grab the "first" mentioned user from the message
    // this will return a 'user' object, just like 'message.author'
    const taggedUser = message.mentions.users.first();

    //this command may be redundant
    //help
    if (command == 'help'){
        message.channel.send('!commands for commands');
    } 

    //commands
    else if (command == 'commands'){
        message.channel.send('!info to learn about this bot' +
        '!update for the latest updates' + 
        '!hi to say hi\n' +
        '!kiss to kiss someone' +
        '!warn to send someone a useless warning');
    }

    //info
    else if (command == 'info'){
        message.channel.send('This bot is a work in progress!\n' +
        "Made in 10/13/2020" +
        "Made by Kevin Phouisangiem" +
        "Credit to CodeLyon for the online tutorials" +
        "Credit to Heroku for hosting this bot" +
        "Check out our GitHub: https://github.com/kevinpho970/discordbot");
    } 
    
    else if (command == 'update'){
        message.channel.send('10/15/20' +
        'Removed !f u command' +
        'Changed !ping pong command to hi hello' +
        "Updated !commands" +
        'Created !info command' +
        'Created !update command' +
        "Added todo comments" +
        'Commented "pog" command out'
        );
    }

    //hi
    else if(command === 'hi'){
        message.channel.send('hello'); 
    }

    //kiss 
    else if (command == 'kiss'){
        if (!message.mentions.users.size) {
            return message.reply('you need to tag someone first!');
        }
        message.channel.send(`<:twodudes1:765817861175902208>${taggedUser}<:twodudes2:765817874652594186>`);
    } 

    //warning
    else if(command == 'warn'){
        if (!message.mentions.users.size) {
            return message.reply('who???');
        }
        message.channel.send(`:rage:  ${taggedUser}, you have been :warning:WARNED:warning:!  :rage:`)
    }
    
    //TODO
    //Word counter??
    //music bot??
    //valorant stats??
    //dice roll
    //cool-o-meter
    //spam detection
    //uwuify
    //birthday bot






    //error message
    else{
        message.channel.send('???');
    }
});


client.login(process.env.token);