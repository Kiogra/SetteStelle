const { ApplicationCommandOptionType } = require('discord.js')
const { spoiler } = require('@discordjs/builders');
module.exports = {
    name: "8ball",
    data: {
        name: "8ball",
        description: "Vuoi una risposta, te la da la palla!!",
      options: [
      {
                name: "message",
                description: "Domandina?",
                type: ApplicationCommandOptionType.String,
                required: true
      }]
    },

    execute(interaction) {
      let question = interaction.options.getString("message").toString();
      var utente = interaction.options.getUser("user")
      const answers = [
        'Certamente',
        'Così vuole il fato',
        'Dubbi? 0',
        'Sì - ma tipo basatissimo',
        'Ci puoi scommettere',
        'Da quello che vede il mio display, Sì',
        'Abbastanza probabile',
        'Prospettive positive',
        `${spoiler('Sì')}`,
        `${spoiler('No')}`,
        'La regia approva',
        'Non ci contare',
        'La mia risposta è no',
        'La regia mi conferma il no',
        'Le prospettive sono molto negative',
        'Ne dubito onestamente',
        'Mi hai confuso, richiedi',
        'Chiedi dopo',
        'Forse è meglio non dirtelo..',
        'Non riesco a predictare ora, richiedi quando vuoi',
        'Concentrati e richiedi',
        'Fatti i cazzi tuoi terrone di merda'
        ]


      let embed = new Discord.EmbedBuilder()
        .setTitle("8BALL")
        .setColor('#ffef00')
        .addFields({
          name: "📝 | Domanda", value: "> " + question, inline: false
        },{
          name: "🔮 | Risposta alla domanda", value: "> " + answers[Math.floor(Math.random() * answers.length)], inline: false
        })
        .setThumbnail(interaction.member.displayAvatarURL())
        .setTimestamp()
        .setFooter({ text: interaction.user.tag/*, iconURL: interaction.author.displayAvatarURL()*/});

      interaction.reply({ embeds: [embed] })
    }
}
