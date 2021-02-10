module.exports = {
    commands: ["number"],
    callback(message, arguments, text){
        message.channel.send(Math.floor(Math.random() * 11) + "!");
    }
}