module.exports = {
    commands: ["scarystory"],
    callback(message, arguments, text){
        const scarystory = require("../../resources/scarystory.json");

        message.channel.send(scarystory[Math.floor(Math.random() * scarystory.length)]);
    }
}