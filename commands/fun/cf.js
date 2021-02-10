module.exports = {
    commands: ["cf", "coinflip"],
    callback(message, arguments, text){
        const coinflip = [
            "<:p_heads:805291071793922058>",
            "<:p_tails:805291079943061514> ",
            "<:p_heads:805291071793922058>",
            "<:p_tails:805291079943061514> ",
            "<:p_heads:805291071793922058>",
            "<:p_tails:805291079943061514> ",
            "<:p_heads:805291071793922058>",
            "<:p_tails:805291079943061514> ",
            "<:p_heads:805291071793922058>",
            "<:p_tails:805291079943061514> ",
            "<:p_heads:805291071793922058>",
            "<:p_tails:805291079943061514> ",
            "<:p_heads:805291071793922058>",
            "<:p_tails:805291079943061514> ",
            "<:p_heads:805291071793922058>",
            "<:p_tails:805291079943061514> ",
            "<:p_heads:805291071793922058>",
            "<:p_tails:805291079943061514> "
        ]

        message.channel.send(coinflip[Math.floor(Math.random() * coinflip.length)])
    }
}