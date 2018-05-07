# DiscordSidekick
This is a bot framework built on https://discord.js.org/#/ that allows anyone to set up extremely simple applications.

Some example applications are included:
- Pong, simply replies to ping commands
- Karma, a karma system for your discord server
- Fortnite, picks a fortnite destination for you to drop

This project has been designed for you to easily add your own applications just like the one above.

## Getting started

To run your own instance of this discord bot you will need to set it up here.
https://discordapp.com/developers/applications/me

Follow the steps to set up an application and then a bot for this application. Under App details, note down your client ID. And once the bot is set up you should be able to see it's unique token, you will need this later. P.S Keep this token secret!

Next, clone this repo to your local machine like so:
```
git clone https://github.com/Nazaire/DiscordSidekick.git
```

Now take your auth-token from earlier and store it in the main directory in a file named auth.json like so:
```
//auth.json
{
   "token": "MY-UNIQUE-BOT-TOKEN"
}
```

Start up your discord bot like so:
```
npm run start
```

Replace CLIENT_ID with your client id from earlier and visit this link to invite your bot to your discord server like so:
```
https://discordapp.com/oauth2/authorize?client_id=CLIENT_ID&scope=bot&permissions=3136
```

You should be all good now!
Try typing !ping in one of your channels.
Look at the different methods contained in this project, a comment string will be at the top describing how to use them.


## Commands

To interact with the main sidekick bot you need to create a channel called "bot_commands"
In this three channel you can manage methods like so:

* !sidekick states - Shows you which methods are enabled/disabled
* !sidekick enable NAME - Enables a specific application
* !sidekick disable NAME - Disables a specific application

Packaged application commands:
* !karma rank - Shows current karma rank
* @NAME ++ - Adds one to the mentioned users karma
* @NAME -- - Subtracts one to the mentioned users karma
* !fn where - Chooses a fortnite destination to drop


## Building your own methods

This is the fun part and it's really simple!
All you need to do is create a folder in /methods and a corresponding file to contain your message logic.
You need to implement an onMessage function to react to messages. This function takes a msg object as input check out the discord.js documentation on how to use it: https://discord.js.org/#/docs/main/stable/class/Message

Heres an example of how to create a simple ping-pong application.
```
// methods/pong/pong.js

function onMessage(msg) {
	if (msg.content.startsWith("!ping")) {
		msg.reply("Pong!")
	}
}

module.exports = {
	name: "Pong",
	onMessage: onMessage
}
```

And then register it in index.js
```
/methods/index.js
module.exports.pong = require('./pong/pong.js') // YOU NEW APPLICATION
module.exports.karma = require('./karma/karma.js')
module.exports.fortnite = require("./fortnite/fortnite.js")
```

And your done!

For any applications you make, feel free to create a pull request.

## Discord JS
This project is a simple extension of discord.js, it is intended to simplify the bot process for absolute beginners. 
To create a more advanced bot check them out!
* https://discord.js.org
* https://github.com/discordjs/discord.js




