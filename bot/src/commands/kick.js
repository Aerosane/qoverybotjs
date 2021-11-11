module.exports = {
	name: 'kick',
	description: 'kick a user.',
	usage: 'qkick @user#1111 reason',
	cooldown: 0, //can be edited
	execute: async (client, message, args, Discord) => {
  
     
    
  if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "856978835124125726") return message.channel.send("Sorry, you don't have permissions to ban the mighty owner!");
                                                                              // owner ID ⬆
  let xdemb = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Kick Command")
  .addField("Description:", `Kick a member`, true)
  .addField("Usage:", " kick [user] [reason]", true)
  .addField("Example:" ," kick @zach spam")

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
      
    if(!member.kickable) 
      return message.channel.send("I cannot kick this user because of my role (it's below his/her)!");
   if(member.user.id === "584684175035203605") return message.channel.send("I can't kick my owner!")
                     // your user id ↑
 
    let reason = args.slice(1).join(' ');
    if(!reason) {
      reason = "No reason given";
    }
    else {
      reason = `${reason}`
    }
    
     member.kick(reason)
      .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));

   let kick = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Kick | ${member.user.tag}`)
      .addField("User", member.user.tag, true)
      .addField("Moderator", message.author.tag, true)
      .addField("Reason", reason)
      .setTimestamp()
      .setFooter(member.id)

    message.channel.send(kick)
member.send(kick)
    }
}
