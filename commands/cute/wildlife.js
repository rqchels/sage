module.exports = {
    commands: ["wildlife"],
    callback(message, arguments, text){
        const wildlife = [
            "https://tinyurl.com/y6s3mxho",
            "https://tinyurl.com/yy8ualwu",
            "https://tinyurl.com/y4t6gjo2",
            "https://tinyurl.com/yyww3c8c",
            "https://tinyurl.com/y2cnw5wq",
            "https://tinyurl.com/y4p8hddk",
            "https://tinyurl.com/y68pgm3k",
            "https://tinyurl.com/yxuydezo",
            "https://tinyurl.com/y4rnsqbd",
            "https://tinyurl.com/y4y62qwt",
            "https://tinyurl.com/yy2vc7hu",
            "https://tinyurl.com/yywhguoc",
            "https://tinyurl.com/y2jy6l5e",
            "https://tinyurl.com/y6m2gkt5",
            "https://tinyurl.com/yxctvwws",
            "https://tinyurl.com/y5scs5mw",
            "https://tinyurl.com/y4npkg48",
            "https://tinyurl.com/y2ruu8pa",
            "https://tinyurl.com/y5lajjwq",
            "https://tinyurl.com/yxbudswz",
            "https://tinyurl.com/y6rrpdzg",
            "https://tinyurl.com/y335bvrk",
            "https://tinyurl.com/yyufjmhs",
            "https://tinyurl.com/y37pek4r",
            "https://tinyurl.com/y45s39jw",
            "https://tinyurl.com/yybzbtff",
            "https://tinyurl.com/y4j9vo76",
            "https://tinyurl.com/y266rpao",
            "https://tinyurl.com/yypu9cwn",
            "https://tinyurl.com/y2fhhpf9"
        ]

        message.channel.send(wildlife[Math.floor(Math.random() * wildlife.length)]);
    }
}