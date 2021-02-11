module.exports = {
    commands: ["contact"],
    callback(message, arguments, text){
        message.author.send("I've just sent your message to the staff team, please stand by for a staff member to DM you!");

        const embed = {
            color: 0x2f3136,
            title: "☕ : ୨୧ support ⋆˚.",
            description: `${message.author.tag} needs help in their dms! \n*'${text}'*`,
            footer: {
                text: `do [s!gotit] to let others know you're helping them!`
            }
        }
        const private = message.client.channels.cache.get("798409968524329051");
        private.send("**୧୨<input.role.here>୧୨**", { embed: embed }, `Their id is: **${message.author.id}**`);
    }
}