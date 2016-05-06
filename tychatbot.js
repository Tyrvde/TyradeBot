/* Replace all quotes with the indicated actions. Simple JS Twitch Chat Bot
d by Tyler Stockman (http://github.com/tyrvde) using the tutorial provided 
by Dev Coffee https://www.youtube.com/channel/UCqr-7GDVTsdNBCeufvERYuw*/

var tmi = require('tmi.js');

var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "", //bots channel name in the double quotes
        password: "" //refer to http://twitchapps.com/tmi using the bot's twitch login
    },
    channels: [""] //your main channel goes in the double quotes
};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(address, port) {
    console.log("Address: " + address + " Port: " + port)
    client.action("tyrvde", "Hello and welcome to Ty's Twitch Channel!");
});

client.on('chat', function (channel, user, message, self) {
   if(message == "!twitter") {
       client.action(/*your channel in double quotes*/, user['display-name'] + /*your twitter in double quotes*/)
   }
   
   if(message == "!about") {
       client.action(/*your channel in double quotes*/, user['display-name'] + /*Info you want your channel to know in double quotes*/)
   }
});
