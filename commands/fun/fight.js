module.exports = {
    commands: ["fight"],
    minArgs: 1,
    expectedArgs: "<user>",
    callback(message, arguments, text){

        const fights = [
            "https://i.imgur.com/W5cQfKj.gif",
            "https://i.imgur.com/fPcpoZK.mp4",
            "https://i.imgur.com/Ihv1isU.mp4",
            "https://i.imgur.com/D2GDlaX.mp4",
            "https://i.imgur.com/EhrqoXI.mp4",
            "https://i.imgur.com/kLLuv81.mp4",
            "https://i.imgur.com/XIivWeS.mp4",
            "https://i.imgur.com/MjIXEN8.mp4",
            "https://i.imgur.com/Pnixl4A.mp4",
            "https://i.imgur.com/4hlo9CT.mp4",
            "https://i.imgur.com/6kDC9tS.mp4",
            "https://i.imgur.com/ZuEHQVL.mp4",
            "https://i.imgur.com/l0s2TuA.mp4",
            "https://i.imgur.com/BjurVWl.mp4",
            "https://i.imgur.com/QkS4oYt.gif",
            "https://i.imgur.com/HIs1FCe.gif",
            "https://i.imgur.com/27Vqxrr.gif",
            "https://i.imgur.com/FKgyu63.gif",
            "https://i.imgur.com/PoJmEMq.gif",
            "https://i.imgur.com/JFQPbQn.gif",
            "https://i.imgur.com/59aSkdN.gif",
            "https://i.imgur.com/uDkzrzF.gif",
            "https://i.imgur.com/raBKMG1.gif",
            "https://i.imgur.com/40OGqTk.gif",
            "https://i.imgur.com/fEGibVl.gif",
            "https://i.imgur.com/PKTyt3k.gif",
            "https://i.imgur.com/wQuLGkq.gif",
            "https://i.imgur.com/37Vd0UD.gif",
            "https://i.imgur.com/VpSeoCH.gif",
            "https://i.imgur.com/HFm9k3o.gif",
            "https://i.imgur.com/iXYz0ZJ.gif",
            "https://i.imgur.com/BjurVWl.mp4",
            "https://i.imgur.com/gt2Edwf.gif"
        ]

        let id = arguments[0].slice(3);
        id = id.slice(0, id.length - 1);
        const user = message.client.users.cache.get(id);
    
        if(!user){
            return message.reply("who do you want to fight?");
        }

        message.channel.send(`YEAH!! BEAT ${user} WOOHOO GO GET EM`, fights[Math.floor(Math.random() * fights.length)]);
    }
}