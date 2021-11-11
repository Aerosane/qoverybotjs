const Discord = require('discord.js');

module.exports = (client) => {
    const WelcomeChannelId = "781255360551977000" // welcome channel id
    const GoodByeChannelId = "781255360551977000" // goodbye channel id
    client.on('guildMemberAdd', (member) => {
        const WelcomeChannel = member.guild.channels.cache.get(WelcomeChannelId)
        WelcomeChannel.send(`Hey ${member}! Welcome to Qovery discord community.`)
    })
    client.on('guildMemberRemove', (member) => {
      const GoodByeChannel = member.guild.channels.cache.get(GoodByeChannelId)
      GoodByeChannel.send(`${member.user.tag} Just Left the Server!`)
    })
}
