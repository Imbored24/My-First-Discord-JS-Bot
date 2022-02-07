const discord = require('discord.js');
const client = new discord.Client();
const { token } = require('./config.json');

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
});


client.login(token);