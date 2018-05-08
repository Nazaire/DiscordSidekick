/*
Fornite module for discord-sidekick
Author Nathan Robb

COMMANDS:
	!dice dXX Y
		Calls the program to roll Y X-sided dice
	!flip
		flips a coin
*/

let flip = [
	"Heads!",
	"Tails!"
]

function getFlip(){
	return flip[Math.floor(Math.random() * flip.length)];
}

function roll(x){
	return Math.floor(Math.random() * x) + 1;
	}

function onMessage(msg){
	var output = [];

	if(msg.content.startsWith("!dice")){
		parts = msg.content.split(" ");
		if(parts.length != 1){
			parts[1] = parts[1].replace('d','');
			for(i = 0; i < parts[2]; i++){
				temp1 = "Dice ";
				temp1 = temp1.concat(i + 1);
				temp1 = temp1.concat(" rolled: ");
				temp1 = temp1.concat(roll(Number(parts[1])));
				output.push(temp1);
			}
		}

		else{
			//console.log("error 1");
			msg.channel.send("Usage error");
		}
	}
	else if(msg.content.startsWith("!flip")) output[0] = getFlip();

	for(i = 0; i < output.length; i++){
		//console.log(output[i]);
		msg.channel.send(output[i]);
	}
}


module.exports = {
	name: "Karma",
	onMessage: onMessage
}
