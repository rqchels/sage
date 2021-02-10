module.exports = {
    commands: ["inspo"],
    callback: async (message, arguments, text) =>{
        const axios = require("axios");
        axios.get("https://zenquotes.io/api/random")
            .then((res) =>{
                message.channel.send(res.data[0].q + " -**" + res.data[0].a + "**");
            })
            .catch(console.error);
    }
}