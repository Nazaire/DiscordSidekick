function onMessage(msg) {
	if (msg.content.startsWith("!ping")) {
		msg.reply("Pong!")
	}
}

module.exports = {
	name: "Pong",
	onMessage: onMessage
}