module.exports = {
    commands: ["hug"],
    minArgs: 1,
    expectedArgs: "<user>",
    callback(message, arguments, text){
        const hugs = [
            "https://i.imgur.com/CW8GEF1.gif",
            "https://i.imgur.com/hMcYz8h.gif",
            "https://i.imgur.com/EenNKW7.gif",
            "https://i.imgur.com/Z6F1giB.gif",
            "https://i.imgur.com/g8HGcG4.mp4",
            "https://i.imgur.com/LgtpwZQ.gif",
            "https://i.imgur.com/8OTP2ve.gif",
            "https://i.imgur.com/XeYqXS7.gif",
            "https://i.imgur.com/sEl5ljo.mp4",
            "https://i.imgur.com/jE3PpYa.gif",
            "https://i.imgur.com/jqsqKbs.gif",
            "https://i.imgur.com/ktVZdTB.gif",
            "https://i.imgur.com/FSmdjMX.gif",
            "https://i.imgur.com/ngAbJ0N.mp4",
            "https://i.imgur.com/R4WxQV2.mp4",
            "https://i.imgur.com/L8fF7Xd.gif",
            "https://i.imgur.com/cyyH17s.gif",
            "https://i.imgur.com/IDHLrJh.mp4",
            "https://i.imgur.com/qhy2B7b.gif",
            "https://i.imgur.com/LHBOVKM.gif",
            "https://i.imgur.com/kTvmOft.gif",
            "https://i.imgur.com/hpddahS.gif",
            "https://i.imgur.com/pQHEJWZ.gif",
            "https://i.imgur.com/LPftvE0.gif",
            "https://i.imgur.com/3OzmqMS.gif",
            "https://i.imgur.com/7i65jOm.jpg",
            "https://i.imgur.com/sjBLD2p.mp4"
        ]

        let id = arguments[0].slice(3);
        id = id.slice(0, id.length - 1);
        const user = message.client.users.cache.get(id);

        if(!user){
            return message.reply("who do you want to hug?");
        }

        message.channel.send(`you have just given ${user} a big ol hug!`, hugs[Math.floor(Math.random() * hugs.length)]);
    }
}