module.exports = {
    commands: ["ticket"],
    callback(message, arguments, text){
        if(message.channel.type !== "dm") return;
        const embed = {
            color: 0x2f3136,
            title: "☕ : ୨୧ ticket ⋆˚.",
            description: `Hello ${message.member}, you have just opened a ticket! How may I help you today?`,
            fields: [
                {
                    name: "s!suggest (your suggestion) ",
                    value: "to give us a suggestion!"
                },
                {
                    name: "s!privsuggest (your suggestion) ",
                    value: "to give us a private suggestion!"
                },
                {
                    name: "s!contact (your message) ",
                    value: "to contact a staff member of Sage!"
                }
            ]
        }
        message.author.send({ embed: embed });
    }
}