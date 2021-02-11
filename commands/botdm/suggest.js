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
                url: "https://cdn.discordapp.com/attachments/798403707065991168/808525103355658240/Screen_Shot_2021-02-08_at_9.30.01_PM.png"
            },
            footer: {
                text: `Suggestion by ${message.author.tag}`
            }
        }
        const channel = message.client.channels.cache.get("798403707065991168");
        channel.send({ embed: embed })
            .then((sentMessage) => sentMessage.react("✅"), sentMessage.react("❌"))
            .catch(console.error);
    }
}