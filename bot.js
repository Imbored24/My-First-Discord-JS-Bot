const discord = require('discord.js');
// Tick all intents in discord.com/developers
const client = new discord.Client({ intents: 32767 });
const { token } = require('./config.json');

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
});


client.login(token);