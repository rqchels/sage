module.exports = bot =>{
    setInterval(remind, 28800000);

    function remind(){
        const channel = bot.channels.cache.get("798410011609006080");
        channel.send("<@&804986608407150612> someone post an activity! <:r_coffee:806112519873101834> <a:r_sparkles:773079630898921482>");
    }
}