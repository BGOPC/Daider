const { SlashCommandBuilder, ChannelType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spam')
        .setDescription('Mass spams')
        .addStringOption(option =>
            option
                .setName("message")
                .setDescription("Message to spam")
                .setRequired(false),
        ),
    async execute(interaction) {
        const message = interaction.options.getString('reason') ?? '';
        await interaction.reply({ content: "Spamming", ephemeral: true });
        for (let index = 0; index < 10; index++) {
            interaction.guild.channels.cache.filter(ch => ch.type === ChannelType.GuildText).random(1)[0].send(message + "@everyone @here");
        }
    },
};