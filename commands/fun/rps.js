module.exports = {
    commands: ["rps"],
    callback(message, arguments, text){
        const rock = [
            "Paper <:r_paper:805720091530231890>, I win! :)",
            "Rock <:r_rock:805721328433758269>, we tied!",
            "Scissor ✂️, you win :("
        ]

        const paper = [
            "Paper <:r_paper:805720091530231890>, we tied!",
            "Rock <:r_rock:805721328433758269>, You win :(",
            "Scissor ✂️, I win! :)"
        ]

        const scissors = [
            "Paper <:r_paper:805720091530231890>, you win! :(",
            "Rock <:r_rock:805721328433758269>, I win :)",
            "Scissor ✂️, we tied!"
        ]

        const embed = {
            color: 0x2f3136,
            title: "☕ : ୨୧ rps ⋆˚.",
            description: "Select your choice! \n> <:p_sagedot:804905018225459291> Rock... <:r_rock:805721328433758269> \n> <:p_sagedot:804905018225459291> Paper... <:r_paper:805720091530231890> \n> <:p_sagedot:804905018225459291> Scissors... ✂️"
        }
        message.channel.send({ embed: embed });

        const filter = m => (m.content.toLowerCase().includes("rock") || m.content.toLowerCase().includes("paper") || m.content.toLowerCase().includes("scissors")) && m.author.id == message.author.id;
        const collector = message.channel.createMessageCollector(filter, { max: 1, time: 15000 });

        collector.on("collect", m =>{
            if(m.content.toLowerCase().includes("rock")){
                const embed = {
                    color: 0x2f3136,
                    title: "☕ : ୨୧ rps ⋆˚.",
                    description: `${rock[Math.floor(Math.random() * rock.length)]}`,
                }
                message.channel.send({ embed: embed });
            } else if(m.content.toLowerCase().includes("paper")){
                const embed = {
                    color: 0x2f3136,
                    title: "☕ : ୨୧ rps ⋆˚.",
                    description: `${paper[Math.floor(Math.random() * paper.length)]}`
                }
                message.channel.send({ embed: embed });
            } else if(m.content.toLowerCase().includes("scissors")){
                const embed = {
                    color: 0x2f3136,
                    title: "☕ : ୨୧ rps ⋆˚.",
                    description: `${scissors[Math.floor(Math.random() * scissors.length)]}`
                }
                message.channel.send({ embed: embed });
            }
        });
    }
}