module.exports = {
    commands: ["testwelcome"],
    permissions: ["MANAGE_MESSAGES"],
    callback(message, arguments, text){
        message.client.emit("guildMemberAdd", message.member);
    }
}