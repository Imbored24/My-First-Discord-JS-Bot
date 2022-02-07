const Client = require('./Structures/Client');
const config = require('./config.json');

const client = new Client(config);
client.start();