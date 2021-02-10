module.exports = {
    commands: ["gotit"],
    callback(message, arguments, text){
        if(message.channel.id !== "798409968524329051") return;
        const user = message.author;

        message.channel.send(`${user} has offered to help, thank you for the support!`);
        message.react("773079678420123679");

        const embed = {
            color: 0x2f3136,
            title: "☕ : ୨୧ reply ⋆˚.",
            description: `Hey ${message.member}, please submit a formalized response using this layout. \n[s!reply (id) (response)]`,
            footer: {
                text: "do [s!closeticket] once you've initialized a response!"
            }
        }

        message.channel.send({ embed: embed });
    }
}