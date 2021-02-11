module.exports = {
    commands: ["suggest"],
    minArgs: 1,
    expectedArgs: "<suggestion>",
    callback(message, arguments, text){
        if(message.channel.type !== "dm") return;
        message.author.send("Your suggestion has been successfully sent. Thank you!");

        const embed = {
            color: 0x2f3136,
            title: "☕ : ୨୧ suggestion ⋆˚.",
            description: text,
            thumbnail: {
                url: "https://media.discordapp.net/attachments/809299766998990848/809305118029381663/webhooks.png"
            },
            footer: {
                text: `Suggestion by ${message.author.tag}`
            }
        }
        const channel = message.client.channels.cache.get("798406258654445569");
        channel.send({ embed: embed })
            .then((sentMessage) => sentMessage.react("✅") && sentMessage.react("❌"))
            .catch(console.error);
    }
}