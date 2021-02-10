module.exports = {
    commands: ["openticket"],
    callback(message, arguments, text){
        if(message.channel.id !== "798409968524329051") return;

        message.guild.channels.create("ticket#0001", {
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
    }
}