module.exports = {
    commands: ["minecraft"],
    callback(message, arguments, text){
        const embed = {
            color: 0x2f3136,
            title: "☕ : ୨୧ minecraft commands ⋆˚.",
            description: "\n> <:p_sagedot:804905018225459291> **s!hyp [user]:** to see your hypixel stats \n> <:p_sagedot:804905018225459291> **s!hlevel [user]:** to see your network level \n> <:p_sagedot:804905018225459291> **s!hpoints [user]:** to see your achievement points \n> <:p_sagedot:804905018225459291> **s!hsb [user]:** to see your skyblock stats \n> <:p_sagedot:804905018225459291> **s!hbw [user]:** to see your bedwars stats \n> <:p_sagedot:804905018225459291> **s!hsw [user]:** to see your skywars stats \n> <:p_sagedot:804905018225459291> **s!harcade [user]:** to see your arcade stats \n> <:p_sagedot:804905018225459291> **s!hmm [user]:** to see your murder mystery stats \n <:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656>"
        }

        message.channel.send({ embed: embed });
    }
}