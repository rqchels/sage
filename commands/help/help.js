module.exports = {
    commands: ["help"],
    callback(message, arguments, text){
        const embed = {
            color: 0x2f3136,
            title: "☕ : ୨୧ commands ⋆˚.",
            description: "🎲 **fun** ⋆˚. \n13 commands! \n`s!fun`\n\n🌷 **cute** ⋆˚. \n6 commands! \n`s!cute` \n\n⚔️ **minecraft** ⋆˚. \n8 commands! \n`s!minecraft`\n\n🤖 bot dm ⋆˚. \n3 commands! \n`s!botdm` \n <:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656>"
        }

        message.channel.send({ embed: embed });
    }
}