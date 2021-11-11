module.exports = {
	name: 'ban',
	description: 'ban a user.',
	aliases: ['b'],
	usage: 'iban @user#1111 reason',
	cooldown: 3,
	execute: async (client, message, args, Discord) => {
  
     
    
  if (!message.member.permissions.has("BAN_MEMBERS")  && message.author.id !== "584684175035203605") return message.channel.send("Sorry, you don't have permissions to use this!");
                                                                       // Your bot id ↑
  let xdemb = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Ban Command")
  .addField("Description:", `Ban a member`, true)
  .addField("Usage:", " Ban [user] [reason]", true)
  .addField("Example:" ,"Ban @zach spam")

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
      
    if(!member.bannable) 
      return message.channel.send("I cannot ban this user because of my role (it's below his/her)!");
   if(member.user.id === "856978835124125726") return message.channel.send("I can't kick my owner!")
                // Your user id ↑
 
    let reason = args.slice(1).join(' ');
    if(!reason) {
      return message.reply('no reason given */shrug*')
    }
    
     member.ban({reason})
      .catch(error => message.reply(`Sorry, I couldn't ban because of : ${error}`));

      let ban = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Ban | ${member.user.tag}`)
      .addField("User", member.user.tag, true)
      .addField("Moderator", message.author.tag, true)
      .addField("Reason", reason)
      .setTimestamp()
      .setFooter(member.id)

  message.channel.send(ban)
  user.send(ban)

    }
}
