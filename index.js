const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const path = require("path");

const welcome = require("./util/welcome");
const autoresponders = require("./util/autoresponders");
const reminder = require("./util/reminder");

bot.once("ready", () =>{
    bot.user.setActivity("s!help || boost us");

    const baseFile = "command-base.js";
    const commandBase = require(`./commands/${baseFile}`);
    const readCommands = dir =>{
        const files = fs.readdirSync(path.join(__dirname, dir));
        for(const file of files){
            const stat = fs.lstatSync(path.join(__dirname, dir, file));
            if(stat.isDirectory()){
                readCommands(path.join(dir, file));
            }else if(file !== baseFile){
                const option = require(path.join(__dirname, dir, file));
                commandBase(bot, option);
            }
        }
    }

    readCommands("commands");

    welcome(bot);
    autoresponders(bot);
    reminder(bot);
});

bot.login("token here");