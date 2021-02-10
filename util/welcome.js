module.exports = bot =>{
    bot.on("guildMemberAdd", member =>{
        const channel = bot.channels.cache.get("798404804263018507");

        const welcomeEmbed = {
            color: 0x2f3136,
            title: "☕ : ୨୧ welcome to sage! ⋆˚.",
            description: "**check out these:** \n> <:p_sagedot:804905018225459291> <#741552036545560596> \n> <:p_sagedot:804905018225459291> <#798404279298818078> \n> <:p_sagedot:804905018225459291> <#798404311959863317> ",
            thumbnail: {
                url: "https://i.imgur.com/02BP7sh.jpg"
            },
            image: {
                url: "https://i.imgur.com/7EPU5mQ.png"
            }
        }

        channel.send(`\`🛎️\`・<@&772554029879918613>... ${member}`, { embed: welcomeEmbed }, "welcome to sage! <a:r_heart:804908857028509716>")
            .then(sentMessage => sentMessage.react("804906705254481960"), sentMessage.react("773079630898921482"))
            .catch(console.error);
    });

    bot.on("guildMemberRemove", member =>{
        const channel = bot.channels.cache.get("798404804263018507");

        const leaveEmbed = {
            color: 0x2f3136,
            title: "☕ : ୨୧ goodbye! ⋆˚.",
            description: `${member.displayName} has left the shop.`,
            thumbnail: {
                url: "https://i.imgur.com/02BP7sh.jpg"
            },
            image: {
                url: "https://i.imgur.com/7EPU5mQ.png"
            }
        }

        channel.send({ embed: leaveEmbed });
    });
}