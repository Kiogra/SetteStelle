const { ApplicationCommandOptionType } = require('discord.js')
module.exports = {
    name: "say",
    data: {
        name: "say",
        description: "RIPETI!",
      options: [
      {
                name: "message",
                description: "send message",
                type: ApplicationCommandOptionType.String,
                required: true
      }]
    },

    execute(interaction) {
      if (!interaction.member.roles.cache.has("796739126384656384")) {
        return interaction.reply({ content: config.emoji[0].error + " | Non puoi usare questo comando" })
    }

      interaction.reply({content: config.emoji[0].success + " | Messaggio mandato" , ephemeral: true})
      let msg = interaction.options.getString("message");
      const channel = interaction.guild.channels.cache.get(interaction.channel.id)
      const say = new Discord.EmbedBuilder()
      .setColor('#ffef00')
      .setTitle("**ANNUNCIO**")
      .setDescription("@everyone"+ msg)
      
      channel.send({ embeds: [say]})
    }
}
