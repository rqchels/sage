module.exports = bot =>{
    bot.on("message", message =>{
        const msg = message.content.toLowerCase();
        if(message.author.bot) return;

        if(msg.includes("welc") && message.channel.id === "798404804263018507"){
            message.react("806112519873101834");
            message.react("773079630898921482");
        } else if((msg.includes("thank") || msg.includes("ty")) && message.channel.id === "798404804263018507"){
            message.react("804908857028509716");
            message.react("773079630898921482");
        } else if(msg.includes("╭┈┈┈┈⋆:°✰") && message.channel.id === "798406360370118656"){
            message.react("773079537109696543");
            message.react("773079576636424202");
        } else if((msg.includes("no problem") || msg.includes("np")) && message.channel.id === "798404804263018507"){
            message.react("804908857028509716");
            message.react("773079630898921482");
        } else if((msg.includes("you're welcome") || msg.includes("youre welcome") || msg.includes("yw") || msg.includes("ur welcome")) && message.channel.id === "798404804263018507"){
            message.react("804908857028509716");
            message.react("773079630898921482");
        } else if(msg.includes("╭┈┈┈┈⋆:°✰") && (message.channel.id === "798404060297953280" || message.channel.id === "798406312949448736")){
            message.react("804906705254481960");
            message.react("773079630898921482");
            message.react("773079537109696543");
            message.react("🧸");
            message.react("🌿");
            message.react("773040510129405952");
            message.react("804908857028509716");
            message.react("🍞");
            message.react("☕");
            message.react("773079789828964352");
            message.react("🍪");
            message.react("773079586308227082");
            message.react("773079678420123679");
            message.react("807050667184750593");
            message.react("🤍");
            message.react("773079601127489557");
            message.react("🥐");
            message.react("706666349698613298");
            message.react("🥯");
            message.react("773321707241996338");
        } else if(msg.includes("good morning") || msg.includes("goodmorning") || msg.includes("gm")){
            message.channel.send("good morning, have a beautiful day " + message.author.username + "! <a:r_heart:804908857028509716>");
        } else if(msg.includes("good night") || msg.includes("goodnight") || msg.includes("gn")){
            message.channel.send("goodnight, sleep well " + message.author.username + "! <a:r_heart:804908857028509716>");
        }
    });
}