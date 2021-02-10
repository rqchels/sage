module.exports = {
    commands: ["hsb"],
    minArgs: 1,
    expectedArgs: "<username>",
    callback(message, arguments, text){
        message.channel.send(`https://sky.lea.moe/stats/${arguments[0]}`);
    }
}