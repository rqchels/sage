module.exports = {
    commands: ["kill"],
    minArgs: 1,
    expectedArgs: "<user>",
    callback(message, arguments, text){
        const kills = [
            "https://i.imgur.com/PextvFY.mp4",
            "https://i.imgur.com/m8ZtlNO.gif",
            "https://i.imgur.com/umCms9c.gif",
            "https://i.imgur.com/3uMLnPC.gif",
            "https://i.imgur.com/8Emt3HH.gif",
            "https://i.imgur.com/Pobe6Lo.mp4",
            "https://i.imgur.com/q1AQ4vD.gif",
            "https://i.imgur.com/kVSTKPb.gif",
            "https://i.imgur.com/duiXoPW.gif",
            "https://i.imgur.com/RG7xw6a.gif",
            "https://i.imgur.com/RG7xw6a.gif",
            "https://i.imgur.com/HshuBMF.gif",
            "https://i.imgur.com/b7cFfKJ.gif",
            "https://i.imgur.com/nN0q9Cr.gif",
            "https://i.imgur.com/qoU4CEq.mp4",
            "https://i.imgur.com/myXc2FS.gif",
            "https://i.imgur.com/7et8lYx.gif",
            "https://i.imgur.com/Y9FsSXa.gif",
            "https://i.imgur.com/vUxYSTU.mp4",
            "https://i.imgur.com/xeYTe0S.mp4",
            "https://i.imgur.com/Tra6zBW.gif",
            "https://i.imgur.com/D30FBBu.mp4",
            "https://i.imgur.com/XOYXT6u.gif",
            "https://i.imgur.com/cBp3EsS.gif"
        ]

        let id = arguments[0].slice(3);
        id = id.slice(0, id.length - 1);
        const user = message.client.users.cache.get(id);

        if(!user){
            return message.reply("who do you want to kill?");
        }

        message.channel.send(`im calling the police on you for killing ${user} like that.`, kills[Math.floor(Math.random() * kills.length)]);
    }
}