const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");

class OSSCommand extends Command {
	constructor() {
		super("oss", {
			aliases: ["oss", "source", "src", "code", "github", "git"]
		});
	}

	async exec(message) {
		const embed = new MessageEmbed()
			.setFooter("⚠️ This is a joke lol")
			.setColor("RANDOM")
			.setDescription(
				"Here's the code lol: [github.com/edazpotato/troll-bot-lol](https://github.com/edazpotato/troll-bot-lol)."
			);

		await message.channel.send(embed);
	}
}

module.exports = OSSCommand;
