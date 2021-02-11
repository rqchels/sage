module.exports = {
    commands: ["privsuggest"],
    minArgs: 1,
    expectedArgs: "<suggestion>",
    callback(message, arguments, text){
        if(message.channel.type !== "dm");
        message.author.send("Your private suggestion has been sent, thank you!");

        const private = message.client.channels.cache.get("798403707065991168");
        private.send(`${message.member} just made a private suggestion saying "**${text}**`);
    }
}