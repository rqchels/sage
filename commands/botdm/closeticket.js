module.exports = {
    commands: ["closeticket"],
    callback(message, arguments, text){
        if(message.channel.parentID !== "798407665436983326") return;
        message.channel.send("Thank you for contacting the Sage support team, we hope you received the help you requested for; we are now closing this ticket. **Have a nice day!**");
    }
}