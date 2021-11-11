const Discord = require('discord.js');
const client = new Discord.Client();
const keep_alive = require('./keep_alive.js')


client.on('ready', () => {
    console.log('FroloHosting Bot is now Online!')
})

const activities_list = [
    "qovery.com",
    "console.qovery.com"
    "roadmap.qovery.com"
    "qovery.io"
    ]; 
client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
        client.user.setActivity(activities_list[index],{ type: 'WATCHING' });
    }, 10000);
    console.log('activities getting changed for qovery')
});

let prefix = 'q';
client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
});
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.once('ready', () => {
	console.log('qovery welcomer bot online');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (message.channel.type === 'dm') {
		return message.reply('Sorry, the commands cannot be used in DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (!command.usage) {
			const reply = `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(client, message, args, Discord);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
}
});

const WelcomeAndGoodbyeEvent = require('./events/Join-Leave-Server.js');

client.on('ready', () => {
  console.log('Welcome And Goodbye Messages Are Ready!!');
  WelcomeAndGoodbyeEvent(client)
});

const AnnouncementChannel = require('./events/AnnouncementChannel.js');

client.on('ready', () => {
  console.log('Announcement Channel Message Sending On!')
  AnnouncementChannel(client)
})

const roleClaim = require('./role-claim')

client.on('ready', () => {
  console.log('Reaction Role is ready!')

  roleClaim(client)
})

client.login('bot_token');
