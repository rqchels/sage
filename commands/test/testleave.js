module.exports = {
    commands: ["testleave"],
    permissions: ["MANAGE_MESSAGES"],
    callback(message, arguments, text){
        message.client.emit("guildMemberRemove", message.member);
    }
}