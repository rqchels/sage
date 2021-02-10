module.exports = {
    commands: ["wyr"],
    callback(message, arguments, text){
        const wyr = require("../../resources/wyr");

        message.channel.send(wyr[Math.floor(Math.random() * wyr.length)]);
    }
}