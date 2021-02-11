module.exports = {
    commands: ["closeticket"],
    callback(message, arguments, text){
        if(message.channel.parentID !== "809313707736694785") return;
        message.channel.send("Thank you for contacting the Sage support team, we hope you received the help you requested for; this ticket will be closing in 5 seconds. **Have a nice day!**");
        setTimeout(closeTick, 5000);
        function closeTick(){
            message.channel.close();
        }
    }
}