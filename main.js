const Discord = require("discord.js")

const client = new Discord.Client()

// call bot command
const prefix="!"

function hi(){
    console.log("!hi used")

    message.channel.send("hello")
}


client.once("ready", () => {
    console.log("kevin bot is online!")
    // TODO: sends msg to test channel that tells when bot is live again
    // const channel = guild.channels.find(ch => ch.name === "test")
    // channel.send("Kevin bot is now online!" + Date.now())
})

client.on("message", message =>{

    /* to be fixed
    if(message == "pog"){
        message.channel.send("poggers")
    } */
    // ignore if no prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    // grab the "first" mentioned user from the message
    // this will return a "user" object, just like "message.author"
    const taggedUser = message.mentions.users.first()

    // this command may be redundant
    // !help
    if (command == "help"){
        console.log("!help used")

        message.channel.send("!commands for commands")
    } 

    // !commands
    else if (command == "commands"){
        console.log("!commands used")

        message.channel.send("```" +
        "!info to learn more about this bot\n" +
        "!update for the latest updates\n" + 
        "!hi to say hi\n" +
        "!kiss to kiss someone \n" +
        "!warn to send someone a useless warning\n" +
        "!die to roll a die\n" +
        "!coin to flip a coin\n" +
        "!cool-meter to see how cool you are\n" +
        "```"
        )
    }

    // !info
    else if (command == "info"){
        console.log("!info used")
        message.channel.send("```" +
        "This is a new bot! Created in 10/13/2020\n"+
        "Currently a work in progress\n" +
        "Made by Kevin Phouisangiem\n" +
        "Made with node.js and JavaScript\n" +
        "Credit to CodeLyon for the online tutorials\n" +
        "Credit to Heroku for hosting this bot\n" +
        "This bot's GitHub: https://github.com/kevinpho970/discordbot\n" +
        "```"
        )
    } 
    
    // !update
    else if (command == "update"){
        console.log("!update used")

        message.channel.send("```" +
        "Latest Update: 1/24/21\n" +
        "Testing...\n" +
        //"\n" +
        "```"
        )
    }

    // !hi
    else if(command === "hi"){
        hi()
        //console.log("!hi used")

        //message.channel.send("hello")
    }
 
    // !kiss 
    else if (command == "kiss"){
        console.log("!kiss used")

        if (!message.mentions.users.size) {
            return message.reply("you need to tag someone first!")
        }
        message.channel.send(`<:twodudes1:768269580862095390>${taggedUser}<:twodudes2:765817874652594186>`)
    } 

    // !warning
    // TODO: only let me warn people
    // TODO: add counter for warns per person
    else if(command == "warn"){
        console.log("!warm used")

        if (!message.mentions.users.size) {
            return message.reply("who???")
        }
        message.channel.send(`:rage:  ${taggedUser}, you have been WARNED!  :rage:`)
    }
    
    // !die
    // Rolls a 6 sided die!
    else if (command == "die") {
        console.log("!die used")

        // Rolls a random number from 0-6
        var ranDie = Math.floor(Math.random() * Math.floor(7))
        message.channel.send("You rolled a " + ranDie  + "!")
    }

    // !coin
    // A coin flips heads or tails
    // 1% chance to land on its side
    else if(command =="coin"){
        console.log("!coin used")

        if (Math.random() < 0.01) {
            message.channel.send("Woah! The coin landed on its side!")
        }
        else if (Math.random() > 0.5){
            message.channel.send("Heads!")
        }
        else {
            message.channel.send("Tails!")
        }
    }

    //!cool-o-meter
    // Randomly generate the cool percentage for the user
    // A user can @ someone to see their cool-o-meter
    // TODO: each user is stuck with their cool percentage
    else if (command == "cool-meter"){
        console.log("!cool-meter used")
        var cool = Math.floor(Math.random() * 100)
        if (!message.mentions.users.size) {
            return message.reply("you are " + cool + "% cool!")
        }
        message.channel.send(`${taggedUser} is ` + cool + "% cool!")
    }


    //TODO
    // add .5 second wait? to stop bot messages sending before user -- easy
    // automatically warn people
    // messages in test channel when the bot is updated
    //Word counter - hard
    //add counter for warnings per user - hard
    //dm users like intro msgs - medium? but i shouldn't spam users with warnings
    //music bot?? -- medium
    //valorant stats?? -- hard
    //spam detection -- hard?
    //uwuify -- medium
    //birthday bot -- hard


    //error message
    else{
        message.channel.send("???")
    }
})


client.login(process.env.token)