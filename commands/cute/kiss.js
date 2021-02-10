module.exports = {
    commands: ["kiss"],
    minArgs: 1,
    expectedArgs: "<user>",
    callback(message, arguments, text){
        const kisses = [
            "https://i.imgur.com/MzAjNdv.gif",
            "https://i.imgur.com/MzAjNdv.gif",
            "https://i.imgur.com/MzAjNdv.gif",
            "https://i.imgur.com/MzAjNdv.gif",
            "https://i.imgur.com/MzAjNdv.gif",
            "https://i.imgur.com/8EMZcfP.mp4",
            "https://i.imgur.com/OE7lSSY.gif",
            "https://i.imgur.com/PfHlW8s.mp4",
            "https://i.imgur.com/mNEHfJ0.gif",
            "https://i.imgur.com/YkrEkbF.gif",
            "https://i.imgur.com/0WWWvat.gif",
            "https://i.imgur.com/MGdlYsj.gif",
            "https://i.imgur.com/f86DzYb.gif",
            "https://i.imgur.com/cWnyExp.gif",
            "https://i.imgur.com/CtXHoOd.gif",
            "https://i.imgur.com/4h7uBat.gif",
            "https://i.imgur.com/YOQgZqY.gif",
            "https://i.imgur.com/s3DggdT.gif",
            "https://i.imgur.com/709chb9.gif",
            "https://i.imgur.com/KWM6eIB.gif",
            "https://i.imgur.com/KKP079r.gif",
            "https://i.imgur.com/Xtxo8nV.mp4",
            "https://i.imgur.com/RZ6myag.gif",
            "https://i.imgur.com/q8VV95J.gif",
            "https://i.imgur.com/NPKIfOf.gif",
            "https://i.imgur.com/P41mj1B.gif",
            "https://i.imgur.com/zGFB0wJ.gif",
            "https://i.imgur.com/zGFB0wJ.gif",
            "https://i.imgur.com/hcqmSPq.gif",
            "https://i.imgur.com/i5zeNTi.mp4",
            "https://i.imgur.com/YVkdbjp.gif"
        ]

        let id = arguments[0].slice(3);
        id = id.slice(0, id.length - 1);
        const user = message.client.users.cache.get(id);

        if(!user){
            return message.reply("who do you want to kiss?");
        }

        message.channel.send(`omg you're kissing ${user} in public?! 🚨 PDA ALERT 🚨`, kisses[Math.floor(Math.random() * kisses.length)]);
    }
}