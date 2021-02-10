module.exports = {
    commands: ["cuddle"],
    minArgs: 1,
    expectedArgs: "<user>",
    callback(message, arguments, text){
        const cuddles = [
            "https://i.imgur.com/p2Jt2P5.gif",
            "https://i.imgur.com/YoW9dvm.mp4",
            "https://i.imgur.com/hgXcoiU.gif",
            "https://i.imgur.com/gGQxvp2.gif",
            "https://i.imgur.com/xnsYB0D.mp4",
            "https://i.imgur.com/5Jg3hZP.mp4",
            "https://i.imgur.com/KYwFHgK.gif",
            "https://i.imgur.com/hm9aSze.gif",
            "https://i.imgur.com/oOZx9ZD.gif",
            "https://i.imgur.com/kSWpxnG.gif",
            "https://i.imgur.com/bT766fG.gif",
            "https://i.imgur.com/QdDlvBX.gif",
            "https://i.imgur.com/ZHCvN8P.gif",
            "https://i.imgur.com/53wqdNU.gif",
            "https://i.imgur.com/RB8C6zJ.mp4",
            "https://i.imgur.com/uu2lDpW.mp4",
            "https://i.imgur.com/FtWNVPU.gif",
            "https://i.imgur.com/i5vwbos.gif",
            "https://i.imgur.com/w9EUxpy.gif",
            "https://i.imgur.com/uzgqzTM.gif",
            "https://i.imgur.com/qQ70mcV.gif"
        ]

        let id = arguments[0].slice(3);
        id = id.slice(0, id.length - 1);
        const user = message.client.users.cache.get(id);

        if(!user){
            return message.reply("who do you want to cuddle?");
        }

        message.channel.send(`you're now cuddling with ${user}!!`, cuddles[Math.floor(Math.random() * cuddles.length)]);
    }
}