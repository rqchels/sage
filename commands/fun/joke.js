module.exports = {
    commands: ["joke"],
    callback(message, arguments, text){
        const jokes = require("../../resources/jokes");

        message.channel.send(jokes[Math.floor(Math.random() * jokes.length)]);
    }
}