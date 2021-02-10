module.exports = {
    commands: ["botdm"],
    callback(message, arguments, text){
        const embed = {
            color: 0x2f3136,
            title: "☕ : ୨୧ commands in bot dm ⋆˚.",
            description: "\n> <:p_sagedot:804905018225459291> **s!confess [confession]:** to privately confess something \n> <:p_sagedot:804905018225459291> **s!suggest [suggestion]:** to suggest something about the server \n> <:p_sagedot:804905018225459291> **s!ticket:** to contact the staff team for any questions or concerns \n <:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656>"
        }

        message.channel.send({ embed: embed });
    }
}