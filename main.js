const Discord = require('discord.js');

const client = new Discord.Client();

const prefix='!';

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
    } else if (command == 'help'){
        message.channel.send('idk what to help u with idiot');
    } else if (command == 'fuck-you'){
        message.channel.send('no fuck you!');
    } else if (command == 'kiss'){
        if (!message.mentions.users.size) {
            return message.reply('you need to tag someone first!');
        }
        //grab the "first" mentioned user from the message
        // this will retrun a 'user' object, just like 'message.author'
        const taggedUser = message.mentions.users.first();
        message.channel.send(`<:twodudes1:765817861175902208>@${taggedUser}<:twodudes2:765817874652594186>`);
        
    }
});


client.login(process.env.token);