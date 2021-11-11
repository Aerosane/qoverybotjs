module.exports = {
  name: 'warn',
  description: 'warns the pinged user',
  cooldown: '5',
  usage: 'qwarn @user <reason>',
  execute: async (client, message, args, Discord) => {
    const WarnedUser = message.mentions.users.first();
    
    const WarnedUserError = new Discord.MessageEmbed()
    .setTitle('Warned User Error!')
    .setDescription('The user you want to ban is either Invalid/not tagged! Please try again with the correct Usage!')
    .setColor("RED")
    .addField(`Correct Usage:`, `Fwarn @user <reason>`)
    if (!WarnedUser) {
      message.channel.send(WarnedUserError)
    } else if (!args[0]) {
      message.channel.send(WarnedUserError)
    } else if (!args[1]) {
      
     
   }
  }
}
