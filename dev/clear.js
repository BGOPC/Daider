module.exports = {
    name: 'clear',
    aliases: ['c'],
    description: 'clear messages!',
    args: false,
    guildOnly: true,
    cooldown: 5,
    execute(message, args) {
        message.channel.send('clearing').then(sent => {
            if (isNaN(args) | (Number(args) < 0)) {
                sent.edit("You should provide a valid integer bigger than zero");
                return;
            }
            const amount = Number(args) > 100
                ? 101
                : Number(args) + 1;
            message.channel.bulkDelete(amount, true)
                .then((_message) => {
                    message.channel
                        .send(`Bot cleared \`${_message.size}\` messages :broom:`)
                        .then(_sent=>_sent.delete());
                });
        });
    },
};