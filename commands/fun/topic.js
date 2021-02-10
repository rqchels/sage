module.exports = {
    commands: ["topic"],
    callback(message, arguments, text){
        const topics = require("../../resources/topics");

        message.channel.send(topics[Math.floor(Math.random() * topics.length)]);
    }
}