// https://discordapp.com/oauth2/authorize?client_id=CLIENT_ID&scope=bot&permissions=445504

const fs = require('fs');
const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require("../auth.json");

var main = require('./main.js')
var methods = require('./methods')

// Load in enabled/disabled config
let states;
try {
    states = require('../states.json')
}
catch (e) {
    states = {}
}

// Apply config to methods object
function updateStates() {
    for (var key in methods) {
        if (states.hasOwnProperty(key)) {
            methods[key].enabled = states[key] 
        } else {
            states[key] = true
            methods[key].enabled = true
        }
    }
}

client.on('ready', () => {
    updateStates();
    main.onReady(client);
});

client.on('message', msg => {
    if (msg.author.bot) return;

    if (msg.channel.name === "bot_commands") {
        if (main.onMessage(client, msg, states)) updateStates();
    } else {
        // Send the event to each method
        for (var key in methods) {
            m = methods[key]

            if (m.enabled && m.hasOwnProperty('onMessage')) {
                try {
                    m.onMessage(msg)
                } catch (err) {
                    console.log("FAIL - Method: " + key + ".onMessage()\n", err)
                }
            }
        }
    }
});

client.login(auth.token);