module.exports = {
    commands: ["hlevel"],
    minArgs: 1,
    expectedArgs: "<username>",
    callback(message, arguments, text){
        message.channel.send(`https://gen.plancke.io/exp/${arguments[0]}.png`);
    }
}