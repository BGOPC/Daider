module.exports = {
	name: 'greet',
	aliases: ['g'],
	description: 'Greeting service',
	args: false,
	guildOnly: true,
	cooldown: 5,
	execute(message) {
		message.channel.send(`Hello How are u doing?? ${message.member.user}`);
	},
};