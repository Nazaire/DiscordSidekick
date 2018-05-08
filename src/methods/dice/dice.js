/*
Dice module for discord-sidekick
Author Nathan Robb

COMMANDS:
	!dice dXX [Y]
		Calls the program to roll Y X-sided dice
		Rolls 1 dice if no Y arg
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
			if(parts[2] < 30 && parts[2] > 0){
				i = 0
				do{
					i++
					temp1 = "Dice ";
					temp1 = temp1.concat(i);
					temp1 = temp1.concat(" rolled: ");
					temp1 = temp1.concat(roll(Number(parts[1])));
					output.push(temp1);
				}while(i < parts[2])
			}
			else if(parts[2] == 0){
				output[0] = "*throws nothing*";
			}
			else if(parts[2] == null){
				temp1 = ("Rolled: ");
				temp1 = temp1.concat(roll(Number(parts[1])));
				output.push(temp1);
			}
			else{
				output[0] = "Please limit your rolls to less then 30";
			}
	}
	else if(msg.content.startsWith("!flip")) output[0] = getFlip();

	var ret = "";
	for(i = 0; i < output.length; i++) ret = ret + output[i] +"\n";

	//console.log(ret);
	msg.channel.send(ret);
	}
}


module.exports = {
	name: "Karma",
	onMessage: onMessage
}
