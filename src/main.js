const fs = require('fs');

// MAIN JS - manages methods
module.exports.onReady = function onReady(client) {
	console.log(`Logged in as ${client.user.tag}!`);

}

module.exports.onMessage = function onMessage(client, msg, states) {
	var content = msg.content

	if (content.startsWith("!sidekick")) {
		parts = content.split(" ")

		if (parts.length == 2 && parts[1] == "states") {
			msg.reply(JSON.stringify(states))
		} else if (parts.length === 3) {

			state = true
			switch (parts[1]) {
				case "enable":
					state = true
				break;
				case "disable":
					state = false
				break;
				default:
					return;
				break;
			}

			name = parts[2];

			states[name] = state

			// Write to file
			fs.writeFile('states.json', JSON.stringify(states), 'utf8', function(){
				string = name + " has been ";
				state_string = state ? "enabled" : "disabled"
				msg.reply(string + state_string)
			});

			return true;

		}
	}
	return false;
}