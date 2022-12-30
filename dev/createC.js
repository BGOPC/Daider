module.exports = {
    name: 'createchannel',
    aliases: ['cc', 'CC', 'createC'],
    description: 'Creates a channel!',
    args: true,
    guildOnly: true,
    cooldown: 1,
    execute(message, args) {
        message.channel.send('creating').then(async sent => {
            const channelName = args[0];
            const amount = args[1] ? args[1] : 1;
            for (let index = 0; index < amount; index++) {
                await message.guild.channels.create(channelName, {
                    type: "text",
                    permissionOverwrites: [],
                });
            }
            sent.delete();
        });
    },
};
