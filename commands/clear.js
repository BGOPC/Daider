const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('clear the messages')
        .addIntegerOption(option =>
            option
                .setName('amount')
                .setDescription('amount of messages to delete')
                .setRequired(false),
        ),
	async execute(interaction) {
        await interaction.reply("Removing...");
        let amount = interaction.options.getInteger('amount') ?? 99;
        if (isNaN(amount) | (Number(amount) < 0)) {
            await interaction.followUp("You should provide a valid integer bigger than zero");
            return;
        }
        amount = Number(amount) > 99
                ? 100
                : Number(amount) + 1;
		await wait(2000);
		await interaction.channel.bulkDelete(amount,true);
	},
};