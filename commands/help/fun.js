module.exports = {
    commands: ["fun"],
    callback(message, arguments, text){
        const embed = {
            color: 0x2f3136,
            title: "☕ : ୨୧ fun commands ⋆˚.",
            description: "\n> <:p_sagedot:804905018225459291> **s!<3:** love \n> <:p_sagedot:804905018225459291> **s!inspo:** inspirational quotes \n> <:p_sagedot:804905018225459291> **s!rps:** rock paper scissor \n> <:p_sagedot:804905018225459291> **s!cf:** coinflip \n> <:p_sagedot:804905018225459291> **s!8ball [question]:** 8ball \n> <:p_sagedot:804905018225459291> **s!number:** random number from 1-10 \n> <:p_sagedot:804905018225459291> **s!topic:** asks you a question \n> <:p_sagedot:804905018225459291> **s!fortune:** eat a fortune cookie \n> <:p_sagedot:804905018225459291> **s!dice:** roll a dice \n> <:p_sagedot:804905018225459291> **s!fight [@user]:** beat someone up \n> <:p_sagedot:804905018225459291> **s!kill [@user]:** murder someone \n> <:p_sagedot:804905018225459291> **s!joke:** tells you a joke \n> <:p_sagedot:804905018225459291> **s!scarystory:** tells you a scary story \n> <:p_sagedot:804905018225459291> **s!wyr:** would you rather \n <:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656><:p_sageline:804905029831622656>"
        }

        message.channel.send({ embed: embed });
    }
}