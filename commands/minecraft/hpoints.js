module.exports = {
    commands: ["hpoints"],
    minArgs: 1,
    expectedArgs: "<username>",
    callback(message, arguments, text){
        message.channel.send(`https://gen.plancke.io/achievementPoints/${arguments[0]}.png`);
    }
}