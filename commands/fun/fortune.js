module.exports = {
    commands: ["fortune"],
    callback(message, arguments, text){
        const fortunes = require("../../resources/fortunes");
        const embed = {
            color: 0x2f3136,
            title: "☕ : ୨୧ fortune ⋆˚.",
            description: `${fortunes[Math.floor(Math.random() * fortunes.length)]}`
        }

        message.channel.send({ embed: embed });
    }
}