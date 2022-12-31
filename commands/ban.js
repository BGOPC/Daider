const { SlashCommandBuilder, PermissionFlagsBits, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a Loser :clown:')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('The loser to ban')
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('reason of ban??')
                .setRequired(false)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setDMPermission(false),

    async execute(interaction) {
        const target = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') ?? 'No reason provided';

        await interaction.reply(`Banning ${target.username} for reason: ${reason}`);
        if (interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.BanMembers) || interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.Administrator)) {
            await interaction.guild.members.ban(target);
        }
    },
};