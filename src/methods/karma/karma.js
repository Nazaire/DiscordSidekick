// Karma module for discord-sidekick
// Author Dylan Kay

const fs = require('fs');

const increment = "++"
const decrement = "--"

let store;
try {
    store = require('./karma-store.json')
}
catch (e) {
    console.log(e)
    store = {}
}

function save() {
    fs.writeFile('./src/methods/karma/karma-store.json', JSON.stringify(store), 'utf8', function(){
        console.log("Karma saved.")
    });
}

function updateKarma(user, amount) {
    if (!(user.id in store)) {
        store[user.id] = 0
    }

    store[user.id] += amount;

    save();
}

function onMessage(msg) {
    if (msg.content.indexOf(increment) != -1 || msg.content.indexOf(decrement) != -1) {
        mentions = msg.mentions.users.array();

        mentions.forEach( user => {

            if (user.username == msg.author.username) {
                msg.reply("Nice try!");
                updateKarma(msg.author, -1)

                msg.channel.send("<@" + msg.author.id + ">'s karma is now " + store[msg.author.id])
            } else {
                if (msg.content.indexOf(increment) != -1) {
                    updateKarma(user, 1)
                } else {
                    updateKarma(user, -1)
                }

                msg.channel.send("<@" + user.id + ">'s karma is now " + store[user.id])
            }

        });
    } else if (msg.content.startsWith("!karma rank")) {
        sorted = []
        for (userId in store) {
            value = store[userId]

            var i = 0
            while (i < sorted.length && sorted[i].value > value) i++;

            sorted.splice(i, 0, { id: userId, value: value})
        }


        var output = ""
        var i = 0
        sorted.forEach( user => {
            i++;
            output += "#" + i + " <@" + user.id + "> with " + user.value + " karma\n";
        })

        msg.channel.send(output)
    }
}

module.exports = {
    name: "Karma",
    onMessage: onMessage
}