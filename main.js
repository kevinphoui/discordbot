const Discord = require("discord.js");
const client = new Discord.Client();


// Prefix to call the bot
const prefix="!";

// Logs once bot is back online
client.once("ready", "message", message => {
    console.log("kevin bot is online!");
    const owner = message.client.users.cache.get("211241232737894400");
    owner.send("hi2");
});


client.on("message", message => {
    //to be fixed
    if (!message.content == "pog"){
        message.channel.send("poggers");
    }

    // ignores all non-commands
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // grab the "first" mentioned user from the message
    // this will return a "user" object, just like "message.author"
    const taggedUser = message.mentions.users.first();

    // Command Functions------------------------
    function commands(){
        // Gives a list of all the commands
        console.log("!commands used");
        message.channel.send("```" +
        "!info to learn more about this bot\n" +
        "!update for the latest updates\n" +
        "!hi to say hi\n" +
        "!kiss to kiss someone \n" +
        "!warn to send someone a useless warning\n" +
        "!die to roll a die\n" +
        "!coin to flip a coin\n" +
        "!cool-meter to see how cool you are (you can @ someone)\n" +
        "```"
        );
    }
    function info(){
        // Prints info about bot
        console.log("!info used");
        message.channel.send(
            "```" +
            "Work in progress | Created in 10/13/2020\n"+
            "Made by Kevin P.\n" +
            "Made with node.js and JavaScript\n" +
            "Hosted on Heroku\n" +
            "Credit to CodeLyon for the online tutorials\n" +
            "GitHub page: https://github.com/kevinphoui/discordbot\n" +
            "```"
        );
    }
    function update(){
        // Prints update log
        console.log("!update used");
        message.channel.send("```" +
            "Last Update: 7/07/21\n" +
            "Bot will not respond to unknown commands\n" +
            "The bot will be mean if you get 30% or less on cool-meter" +
            "```"
        );
    }
    function hi(){
        console.log("!hi used");
        message.channel.send("hello");
    }
    function kiss(){
        console.log("!kiss used");
        if (!message.mentions.users.size) {
            return message.reply("you need to tag someone first!");
        }
        message.channel.send(`<:twodudes1:768269580862095390>${taggedUser}<:twodudes2:765817874652594186>`);

    }
    function warn(){
        // TODO: add counter for warns per person
        console.log("!warm used");

        if (!message.mentions.users.size) {
            return message.reply("who???");
        }
        message.channel.send(`:rage:  ${taggedUser}, you have been WARNED!  :rage:`);

    }
    function die(){
        // Rolls a 6 sided die!
        // Rolls a random number from 1-6
        console.log("!die used");
        var ranDie = Math.floor(Math.random() * Math.floor(6)) + 1;
        message.channel.send("You rolled a " + ranDie  + "!");
    }
    function coin(){
        // A coin flips heads or tails
        // 1% chance to land on its side
        console.log("!coin used")
        if (Math.random() < 0.01) {
            message.channel.send("Woah! The coin landed on its side! My wife left me!");
        }
        else if (Math.random() > 0.5){
            message.channel.send("The coin landed on heads!");
        }
        else {
            message.channel.send("The coin landed on tails!");
        }
    }
    function cool(){
        // Randomly generate the cool percentage for the user
        // A user can @ someone to see their cool-o-meter
        // TODO: each user is stuck with their cool percentage
        console.log("!cool-meter used");
        var coolPercentage = Math.floor(Math.random() * 100);
        if (!message.mentions.users.size) {
            if (coolPercentage <= 30) {
                return message.reply("you are " + coolPercentage + "% cool. L<:OMEGALUL:862175661211516929>SER");
            }
            else {
                return message.reply("you are " + coolPercentage + "% cool!");
            }
        }
        if (message.mentions.users.size){
            if (coolPercentage <= 30) {
                return message.channel.send(`${taggedUser} is ` + coolPercentage + '% cool! L<:OMEGALUL:862175661211516929>SER');
            }
            else {
                return message.channel.send(`${taggedUser} is ` + coolPercentage + "% cool!");
            }
        }
    }
    // Function calls---------------------------
    // !help
    if (command == "help"){
        // this command may be redundant
        console.log("!help used");
        commands();
    }
    // !commands
    else if (command == "commands"){commands()}
    // !info
    else if (command == "info"){info()}
    // !update
    else if (command == "update"){update()}
    // !hi
    else if(command === "hi"){hi()}
    // !kiss
    else if (command == "kiss"){kiss()}
    // !warning
    else if(command == "warn"){warn()}
    // !die
    else if (command == "die") {die()}
    // !coin
    else if(command =="coin"){coin()}
    // !cool-meter
    else if (command == "cool-meter"){cool()}

    /*TODO
    Message me once the bot is back online -- easy?
    add .1 second wait? to stop bot messages sending before user -- easy
    automatically warn people
    Word counter - hard
    add counter for warnings per user - hard
    dm users like intro msgs - medium? but i shouldn't spam users with warnings
    music bot?? -- medium
    valorant stats?? -- hard
    spam detection -- hard?
    uwuify -- medium
    birthday bot -- hard
    */
})


client.login(process.env.token);
