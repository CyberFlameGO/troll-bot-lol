const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");

class GhostPingCommand extends Command {
	constructor() {
		super("ghost-pings", {
			aliases: ["ghost-pings", "ghost-ping", "pings", "ghost"]
		});
	}

	async exec(message, args) {
		const oldSetting = this.client.settings.get(
			message.guild.id,
			"ghostPings",
			false
		);

		if (
			this.client.ownerID != message.author.id ||
			!message.channel
				.permissionsFor(message.author.id)
				.has("MANAGE_GUILD")
		) {
			const embed = new MessageEmbed()
				.setFooter("⚠️ This is a joke lol")
				.setColor("RANDOM")
				.setDescription(
					`This server currently has Ghost Pings \`${
						oldSetting ? "Enabled" : "Disabled"
					}\`.`
				);
			return message.util.send(embed);
		} else {
			// console.log(oldSetting);
			await this.client.settings.set(
				message.guild.id,
				"ghostPings",
				!oldSetting
			);

			const embed = new MessageEmbed()
				.setFooter("⚠️ This is a joke lol")
				.setColor("RANDOM")
				.setDescription(
					`This server's setting for ghost pings has been changed to \`${
						!oldSetting ? "Enabled" : "Disabled"
					}\`. Random members will ${
						!oldSetting ? "now" : "no longer"
					} be randomly Ghost Pinged every 5 minutes.`
				);
			return message.util.send(embed);
		}
	}
}

module.exports = GhostPingCommand;
