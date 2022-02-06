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
	}
}