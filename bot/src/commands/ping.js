const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'measures and sends the value of the ping of bot.',
	cooldown: 3,
	execute: async (client, message, args, Discord) => {
	    const cpie = new Discord.MessageEmbed()
	    .setTitle('PONG!')
	    .setDescription(`Calculating Ping! Please wait`)
	    
	     message.reply(cpie).then((resultMessage) => {
      
      const ping = resultMessage.createdTimestamp - message.createdTimestamp
      
      const pingembed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Bot Latency is ${ping}ms.\nAPI LATENCY is ${Math.round(message.client.ws.ping)}ms`);
      
     resultMessage.edit(pingembed); 
   })  
  },
};
