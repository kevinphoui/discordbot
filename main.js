const Discord = require('discord.js');

const client = new Discord.Client();

//call bot command
const prefix='!';

//grab the "first" mentioned user from the message
// this will return a 'user' object, just like 'message.author'
const taggedUser = message.mentions.users.first();
client.once('ready', () => {
    console.log('kevin bot is online!');
});

client.on('message', message =>{
    //ignore if no prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    } else if (command == 'twitch'){
        message.channel.send('https://www.twitch.tv/catblast');
    } else if (command == 'fuck.you'){
        if (!message.mentions.users.size) {
            return message.reply('you need to tag someone first!');
        }
        var randomNum = Math.random();
        if (randomNum > 0.8){
        message.channel.send(`Hey ${taggedUser}, fuck you!`);
        }
        else {
            message.channel.send(`You know what? fuck you instead ${taggedUser}!`);
        }
    } else if (command == 'kiss'){
        if (!message.mentions.users.size) {
            return message.reply('you need to tag someone first!');
        }
        message.channel.send(`<:twodudes1:765817861175902208>${taggedUser}<:twodudes2:765817874652594186>`);
    } else if (command == 'help'){
        message.channel.send('!commands for commands');
    } else if (command == 'commands'){
        message.channel.send('!ping for pong.\n' +
        '!twitch for cool streamer.\n' +
        '!fuck.you to fuck someone off.\n' +
        '!kiss to kiss someone.');
    }
    else{
        message.channel.send('???');
    }
});


client.login(process.env.token);