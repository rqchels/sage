module.exports = {
    commands: ["cat"],
    callback(message, arguments, text){
        const axios = require("axios");
        axios.get("https://api.thecatapi.com/v1/images/search")
            .then((res) =>{
                message.channel.send(res.data[0].url)
            })
            .catch(console.error);
    }
}