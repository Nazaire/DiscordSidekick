/* 
Pong module for discord-sidekick
Author Dylan Kay

COMMANDS:
    !ping
    	Will respond with Pong!
*/

function onMessage(msg) {
	if (msg.content.startsWith("!ping")) {
		msg.reply("Pong!")
	}
}

module.exports = {
	name: "Pong",
	onMessage: onMessage
}