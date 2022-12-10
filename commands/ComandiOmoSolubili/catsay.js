const { ApplicationCommandOptionType } = require('discord.js')
module.exports = {
    name: "catsay",
    data: {
        name: "catsay",
        description: "make a cat repeat what you want!",
      options: [
      {
                name: "message",
                description: "send message",
                type: ApplicationCommandOptionType.String,
                required: true
      }]
    },

    execute(interaction) {
      let msg = interaction.options.getString("message");
      let link = `https://cataas.com/cat/says/${msg}?size=50&color=white`;

      const pfp = new Discord.AttachmentBuilder(link, { name: "pfp.png"})
      interaction.reply({ files: [pfp] })
    }
}
