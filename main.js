const Discord = require("discord.js");

const client = new Discord.Client();

//call bot command
const prefix="!";


client.once("ready", () => {
    console.log("kevin bot is online!");
});

client.on("message", message =>{

    /* to be fixed
    if(message == "pog"){
        message.channel.send("poggers");
    } */
    //ignore if no prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //grab the "first" mentioned user from the message
    // this will return a "user" object, just like "message.author"
    const taggedUser = message.mentions.users.first();

    //this command may be redundant
    //help
    if (command == "help"){
        message.channel.send("!commands for commands");
    } 

    //commands
    else if (command == "commands"){
        message.channel.send("!info to learn more about this bot\n" +
        "!update for the latest updates\n" + 
        "!hi to say hi\n" +
        "!kiss to kiss someone\n" +
        "!warn to send someone a useless warning\n");
    }

    //info
    else if (command == "info"){
        message.channel.send("```This is a relatively new bot!\n"+
        "Currently a work in progress!\n" +
        "Made by Kevin Phouisangiem\n" +
        "Created in 10/13/2020\n" +
        "Made with node.js and JavaScript" +
        "Credit to CodeLyon for the online tutorials\n" +
        "Credit to Heroku for hosting this bot\n" +
        "This bot's GitHub: https://github.com/kevinpho970/discordbot\n```");
    } 
    
    //update
    else if (command == "update"){
        message.channel.send("```Latest Update: 10/17/20\n" +
        "Modified warning message\n" +
        " ```"
        );
    }

    //hi
    else if(command === "hi"){
        message.channel.send("hello"); 
    }
 
    //kiss 
    else if (command == "kiss"){
        if (!message.mentions.users.size) {
            return message.reply("you need to tag someone first!");
        }
        message.channel.send(`<:twodudes1:765817861175902208>${taggedUser}<:twodudes2:765817874652594186>`);
    } 

    //warning
    //TODO: only I can warn people
    //TODO: add counter for warns per person
    else if(command == "warn"){
        if (!message.mentions.users.size) {
            return message.reply("who???");
        }
        message.channel.send(`:rage:  ${taggedUser}, you have been WARNED!  :rage:`)
    }
    
    //TODO
    //add better text formatting
    //Word counter??
    //add counter for warnings per user
    //dm users like sending warnings
    //music bot??
    //valorant stats??
    //dice roll
    //cool-o-meter
    //spam detection
    //uwuify
    //birthday bot






    //error message
    else{
        message.channel.send("???");
    }
});


client.login(process.env.token);