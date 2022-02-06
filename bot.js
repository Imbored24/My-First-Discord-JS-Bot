const { Client } = require("discord.js");
const client = new Client({intents: 32767});
const {token} = require('./config.json');

client.once("ready", () => {
	console.log("I have logged in!");
	client.user.setActivity("Hello!", {type: "PLAYING"})
});

client.login(token);