module.exports = {
    commands: ["8ball"],
    callback(message, arguments, text){
        const ball = [
            "As I see it, yes.",
            "*%$@ yeah, you already know the vibes.",
            "No... Just no.",
            "Signs point to SIKE YOU THOUGHT",
            "Go ask someone else lol.",
            "How the @!$* should I know.",
            "You may rely on it.",
            "Yes – definitely.",
            "Yes.",
            "Without a doubt.",
            "Very doubtful.",
            "Signs point to yes.",
            "Reply hazy, try again.",
            "Outlook good.",
            "Outlook not so good.",
            "My sources say no.",
            "My reply is no.",
            "Most likely.",
            "It is decidedly so.",
            "Don’t count on it.",
            "Concentrate and ask again.",
            "Cannot predict now.",
            "Better not tell you now.",
            "Ask me again later.",
            "It is certain."
        ]

        message.channel.send(ball[Math.floor(Math.random() * ball.length)]);
    }
}