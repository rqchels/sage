module.exports = {
    commands: ["cute"],
    callback(message, arguments, text){
        const embed = {
            color: 0x2f3136,
            title: "☕ : ୨୧ cute commands ⋆˚.",
            description: "\n> <:p_sagedot:804905018225459291> **s!cat:** cute cat pictures \n> <:p_sagedot:804905018225459291> **s!dog:** cute dog pictures \n> <:p_sagedot:804905018225459291> **s!wildlife:** cute wildlife pictures \n> <:p_sagedot:804905018225459291> **s!hug [@user]:** give someone a hug \n> <:p_sagedot:804905018225459291> **s!cuddle [@user]:** cuddle with someone \n> <:p_sagedot:804905018225459291> **s!kiss [@user]:** give someone a kiss \n <:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656>"
        }

        message.channel.send({ embed: embed });
    }
}