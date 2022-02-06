const mongoose = require('mongoose');
const { mongo } = require('../../config.json');
module.exports = {
	name: "ready",
	once: true,
	execute(client){
		console.log(`Logged in as ${client.user.tag}`);
		if(client.guilds.cache.size == 1)
		{
			client.user.setActivity(`Over ${client.guilds.cache.size} server`, {type: "WATCHING"});
		}
		else
		{
			client.user.setActivity(`Over ${client.guilds.cache.size} servers`, {type: "WATCHING"});
		}

		if(!mongo) return console.log('There is no mongo token in the config file! Please add this for all database features.');
		mongoose.connect(mongo, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}).then(() => {
			console.log("The client is now connected to the database!");
		}).catch((err) => {
			console.log(`There has been an error trying to connect to the database!\n${err}`)
		});
	}
}