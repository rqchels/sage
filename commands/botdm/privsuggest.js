module.exports = {
    commands: ["privsuggest"],
    minArgs: 1,
    expectedArgs: "<suggestion>",
    callback(message, arguments, text){
        if(message.channel.type !== "dm");
        message.author.send("Your private suggestion has been sent, thank you!");

        const embed = {
            color: 0x2f3136,
            title: "☕ : ୨୧ suggestion ⋆˚.",
            description: text,
            thumbnail: {
                url: "https://media.discordapp.net/attachments/809299766998990848/809305118029381663/webhooks.png"
            },
            footer: {
                text: `Suggestion by anonymous`
            }
        }

        const private = message.client.channels.cache.get("7984099685243290518");
        private.send({ embed: embed })
            .then(sentMessage => sentMessage.react("✅") && sentMessage.react("❌"))
            .catch(console.error);
    }
}