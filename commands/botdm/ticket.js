module.exports = {
    commands: ["ticket"],
    callback(message, arguments, text){
        const cooldownChannelName = message.author.username.toLowerCase() + "-" + message.author.discriminator;
        const cooldown = reaction.message.guild.channels.cache.find(channel => channel.name === cooldownChannelName);
        if(cooldown){
            return message.reply("You can only have one ticket open at a time.");
        }

        const embed = {
            color: 0x2f3136,
            description: "> if youre looking to become a listed staff member\n**ping ash**\n> if you have questions/need help\n**ping an online staff member**\n> if youre looking to appeal a warn\n**ping an owner/co**\n> if you need to claim boost perks\n**ping ash**"
        }

        message.guild.channels.create(cooldownChannelName, {
            parent: "798407665436983326",
            permissionOverwrites: [
                {
                    id: message.author.id,
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: message.guild.id,
                    deny: ["VIEW_CHANNEL"]
                }
            ]
        })
            .then(channel => channel.send(`𓂃 ${user} hi cutie`) && channel.send({ embed: embed }))
            .catch(console.error);
    }
}