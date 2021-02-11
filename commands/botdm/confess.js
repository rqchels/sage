module.exports = {
    commands: ["confess"],
    minArgs: 1,
    expectedArgs: "<confession>",
    callback(message, arguments, text){
        if(message.channel.type !== "dm") return;
        message.author.send("Your confession has been successfully sent!");

        const embed = {
            color: 0x2f3136,
            title: "☕ : ୨୧ confession ⋆˚.",
            description: text,
            footer: {
                text: "type 's!confess [msg]' in my dms to confess!"
            }
        }

        const channel = message.client.channels.cache.get("798406796518752266");
        const private = message.client.channels.cache.get("798403707065991168");
        private.send(`${message.author.tag} just said **${text}**`);
        channel.send({ embed: embed });
    }
}