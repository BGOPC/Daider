module.exports = {
    name: 'ban',
    aliases: ['b'],
    description: 'ban a loser!',
    args: true,
    guildOnly: true,
    cooldown: 1,
    execute(message, args) {
        message.channel.send('banning').then(sent => {
            const user = message.mentions.users.first();
            const member = message.guild.members.resolve(user);
            const banReason = args[1];
            if (member) {
                member
                    .ban({
                        reason: banReason,
                    })
                    .then(() => {
                        sent.edit(`Successfully banned ${user.tag}`);
                    })
                    .catch(err => {
                        sent.edit('I was unable to ban the member');
                        console.error(err);
                    });

            }
        });
    },
};