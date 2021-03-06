module.exports = {
	name: 'purge',
	usage: "qpurge <number>",
	description: 'Purge up to 99 messages.',
	usage: "Fpurge <number>",
	aliases: ["prune", "delete"],
	execute(client, message, args, Discord) {
	  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("Sorry, you don't have permissions to use this!");
       
		const amount = parseInt(args[0]) + 1;
     
		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) { // the 99 message clearance limit is due to discord rate limit :(
			return message.reply('you need to input a number between 1 and 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to prune messages in this channel!');
		});
	},
};
