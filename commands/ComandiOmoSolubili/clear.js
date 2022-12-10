const {ApplicationCommandOptionType, PermissionFlagsBits} = require("discord.js")
module.exports = {
    name: "clear",
    data: {
        name: "clear",
        description: "Pulisci la chat",
      options: [
      {
                name: "count",
                description: "Messaggi da Eliminare",
                type: ApplicationCommandOptionType.Integer,
                required: true
      }]
    },
    execute(interaction) {
      if (!interaction.member.roles.cache.has("796739126384656384")) {
        return interaction.reply({ content: config.emoji[0].error + " | Non puoi usare questo comando" })
    }

      const count = interaction.options.getInteger('count');

      
        if (!count) {
            return interaction.reply({ content: config.emoji[0].error + " | Metti un numero valido" }).then(chd => {
        setTimeout(function() {
          chd.delete()
       }, 10000)
      })
        }
        if (count > 100) {
            return interaction.reply({ content: config.emoji[0].error + " | Non puoi eliminare più di 100 messaggi"}).then(chd => {
        setTimeout(function() {
          chd.delete()
       }, 10000)
      })
        }
        interaction.channel.bulkDelete(count, true)
        interaction.reply({ content: config.emoji[0].success + " | `" + count + "` messaggi eliminati", ephemeral: true })
    }
}
