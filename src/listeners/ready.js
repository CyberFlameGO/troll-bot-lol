const { Listener } = require("discord-akairo");

class ReadyListener extends Listener {
	constructor() {
		super("ready", {
			emitter: "client",
			event: "ready"
		});
	}
	impersonateGuilds;
	exec() {
		console.log("I'm ready!");
		const inviteURL = `https://discord.com/api/oauth2/authorize?client_id=${this.client.user.id}&permissions=970456176&scope=bot`;
		console.log(`Add me to your server with this link: ${inviteURL}`);

		this.client.user.setActivity("some nerds suffer lol", {
			type: "WATCHING"
		});

		this.client.pingLoop = setInterval(() => {
			this.client.ghostPingGuilds();
		}, 60 * 5 * 1000 /* every 5 minutes */);

		this.client.impersonationLoop = setInterval(() => {
			this.client.ghostPingGuilds();
		}, 60 * 3 * 1000 /* every 3 minutes */);

		// Do it once when the bot starts
		this.client.impersonateGuilds();
		this.client.ghostPingGuilds();
	}
}

module.exports = ReadyListener;
