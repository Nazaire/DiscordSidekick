// Fortnite module for discord-sidekick
// Author Dylan Kay

let locations = [
	"Anarchy Acres",
	"Dusty Divot",
	"Fatal Fields",
	"Flush Factory",
	"Greasy Grove",
	"Haunted Hills",
	"Junk Junction",
	"Lonely Lodge",
	"Loot Lake",
	"Lucky Landing",
	"Moisty Mire",
	"Pleasant Park",
	"Retail Row",
	"Risky Reels",
	"Salty Springs",
	"Shifty Shafts",
	"Snobby Shores",
	"Tilted Towers",
	"Tomato Town",
	"Wailing Woods"
	]

let responses = [
	"You're dropping {}!",
	"Destination {}!",
	"Yippy Ki-Yay Mother Fucker. {}!",
	"To Infinity… And Beyond! {}!",
	"I Have Had It With These Motherfucking Snakes On This Motherfucking Plane. {}!",
	"Let’s Go, Bitch. I’ve Done Action Films. {}!",
	"Hasta La Vista, Baby. {}!",
	"The Games Have Just Begun. {}!",
	"May The Force Be With You. {}!",
]

function getRandomLocation() {
	return locations[Math.floor(Math.random()*locations.length)];
}

function getRandomResponse() {
	return responses[Math.floor(Math.random()*responses.length)];
}

function onMessage(msg) {
	if (msg.content.startsWith("!fn")) {
		parts = msg.content.split(" ")
		if (parts[1].toLowerCase() == "where")  {
			location = getRandomLocation();
			response = getRandomResponse();
			
			output = response.replace("{}", location);

			msg.channel.send(output);
		}
	}
}

module.exports = {
    name: "Karma",
    onMessage: onMessage
}