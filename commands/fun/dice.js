module.exports = {
    commands: ["dice"],
    callback(message, arguments, text){
        const dice = [
            "<:r_dice1:805373804414763009>",
            "<:r_dice2:805373810915672065>",
            "<:r_dice3:805373819531034684>",
            "<:r_dice4:805373824857538571>",
            "<:r_dice5:805373829878513706>",
            "<:r_dice6:805373836853379072>"
        ]

        message.channel.send(dice[Math.floor(Math.random() * dice.length)]);
    }
}