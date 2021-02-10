const prefix = "s!";

const validatePermissions = (permissions) =>{
    const validPermissions = [
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS",
        "VIEW_GUILD_INSIGHTS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS",
    ]

    // check if perms used in file exist
    for(const permission of permissions){
        if(!validPermissions.includes(permission)){
            throw new Error(`unknown permission node: "${permission}"`);
        }
    }
}

const recentlyUsed = []

module.exports = (bot, commandOptions) =>{
    // command options
    let {
        commands,
        expectedArgs = "",
        permissionError = "You do not have permission to execute that command!",
        minArgs = 0,
        maxArgs = null,
        cooldown = -1,
        permissions = [],
        requiredRoles = [],
        callback
    } = commandOptions

    // convert commands string => array
    if(typeof commands === "string"){
        commands = [commands];
    }

    // log loaded commands to console
    console.log(`${commands[0]} loaded!`);

    //convert permissions string => array
    if(permissions.length){
        if(typeof permissions === "string"){
            permissions = [permissions];
        }

        validatePermissions(permissions);
    }

    // listen for commands
    bot.on("message", async (message) =>{
        const { member, content, guild } = message;

        for(const alias of commands){
            // if message starts with ,command
            if(content.toLowerCase().startsWith(`${prefix}${alias.toLowerCase()}`)){

                // does the user have correct perms?
                for(const permission of permissions){
                    if(!member.hasPermission(permission)){
                        return message.reply({ embed: permissionError });
                    }
                }

                // does the user have the required role(s)?
                for(const requiredRole of requiredRoles){
                    const role = guild.roles.cache.find(role => role.name === requiredRole);

                    if(!role || !member.roles.cache.has(role.id)){
                        return message.reply(`the **${requiredRole}** role is required to use this command`);
                    }
                }

                // split on spaces
                const arguments = content.split(/[ ]+/);

                // slice off the command
                arguments.shift();

                // is the user using the required args?
                if(arguments.length < minArgs || (maxArgs !== null && arguments.length > maxArgs)){
                    return message.reply(`try: ${prefix}${alias} ${expectedArgs}`);
                }

                // execute the command
                callback(message, arguments, arguments.join(" "));
            }
        }
    });
}
