const { SlashCommandBuilder, ChannelType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dc')
        .setDescription('mass removes channels')
        .addStringOption(option =>
            option
                .setName('name')
                .setDescription('name of the channels')
                .setRequired(false)
        )
        .addIntegerOption(option =>
            option
                .setName('amount')
                .setDescription('amount of channels to remove')
                .setRequired(false),
        ),
    async execute(interaction) {
        await interaction.reply({ content: "Removing...", ephemeral: true });
        const amount = interaction.options.getInteger('amount') ?? 500;
        const community = ['rules', 'moderator-only'];
        const name = interaction.options.getString('name') ?? undefined;
        if (isNaN(amount) | (Number(amount) < 0)) {
            await interaction.followUp({ content: "You should provide a valid integer bigger than zero", ephemeral: true });
            return;
        }
        for (let index = 0; index <= amount; index++) {
            if (name != undefined) {
                cr = await interaction.guild.channels.cache.filter(ch => ch.name === name).first();
            }
            else {
                cr = await interaction.guild.channels.cache.filter(ch => !community.includes(ch.name)).first();
            }
            if (!cr) {
                break;
            }
            if (cr.deletable) {
                await cr.delete()
            }
            else {
                await interaction.followUp({ content: `Couldn't delete ${cr.name}`, ephemeral: true });
            }
        }
        await interaction.editReply({ content: "Done", ephemeral: true });

    },
};


// module.exports = {
//     name: 'removechannel',
//     aliases: ['rc', 'RC', 'remC', 'dc'],
//     description: 'removes a channel!',
//     args: true,
//     guildOnly: true,
//     cooldown: 0.1,
//     execute(message, args) {
//         message.channel.send('removing').then(async sent => {
//             const channelName = args[0];
//             const amount = args[1] ? args[1] : 1;
//             console.log(amount, channelName);
//             for (let index = 0; index < amount; index++) {
//                 await message.guild.channels.fetch();
//                 const exist = await message.guild.channels.cache.find(ch => ch.name === channelName);
//                 if (exist) exist.delete();

//             }
//             sent.delete();
//         });
//     },
// };
