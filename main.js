const Discord = require('discord.js');

const client = new Discord.Client();

//call bot command
const prefix='!';


client.once('ready', () => {
    console.log('kevin bot is online!');
});

client.on('message', message =>{

    if(message== 'pog'){
        message.channel.send('poggers');
    }
    //ignore if no prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    //grab the "first" mentioned user from the message
    // this will return a 'user' object, just like 'message.author'
    const taggedUser = message.mentions.users.first();

    //pingpong
    if(command === 'ping'){
        message.channel.send('pong!'); 
    } 

    //help
    else if (command == 'help'){
        message.channel.send('!commands for commands');
    } 

    //commands
    else if (command == 'commands'){
        message.channel.send('!ping for pong\n' +
        '!twitch for cool streamer\n' +
        '!fuck.you to fuck someone off\n' +
        '!kiss to kiss someone');
    }
    //twitch channel plug
    else if (command == 'twitch'){
        message.channel.send('https://www.twitch.tv/catblast');
    } 

    //f u 
    else if (command == 'fuck.you'){
        //error
        if (!message.mentions.users.size) {
            return message.reply('you need to tag someone first!');
        }
        //num generator for plot twist
        var randomNum = Math.random();
        if (randomNum < 0.8){
        message.channel.send(`Hey ${taggedUser}, fuck you!`);
        }
        else {
            message.channel.send(`You know what? fuck you instead ${taggedUser}!`);
        }
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
        message.channel.send(`:rage:  ${taggedUser}, you have been :warning:WARNED:warning:! :rage:`)
    }
    





    //error message
    else{
        message.channel.send('???');
    }
});


client.login(process.env.token);