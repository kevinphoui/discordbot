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
        //grab the "first" mentioned user from the message
        // this will retrun a 'user' object, just like 'message.author'
        const taggedUser = message.mentions.users.first();
        message.channel.send(':twodudes1: ${taggedUser.username} :twodudes2:');
    }
});


client.login(process.env.token);