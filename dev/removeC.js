module.exports = {
    name: 'removechannel',
    aliases: ['rc', 'RC', 'remC', 'dc'],
    description: 'removes a channel!',
    args: true,
    guildOnly: true,
    cooldown: 0.1,
    execute(message, args) {
        message.channel.send('removing').then(async sent => {
            const channelName = args[0];
            const amount = args[1] ? args[1] : 1;
            console.log(amount, channelName);
            for (let index = 0; index < amount; index++) {
                await message.guild.channels.fetch();
                const exist = await message.guild.channels.cache.find(ch => ch.name === channelName);
                if (exist) exist.delete();

            }
            sent.delete();
        });
    },
};
