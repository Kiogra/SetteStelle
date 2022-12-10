const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js')
module.exports = {
    name: "consiglio",
    data: {
        name: "consiglio",
        description: "Cagami il cazzo con un tuo consiglio!",
        options: [
            {
                      name: "messaggio",
                      description: "Un messaggio broh",
                      type: ApplicationCommandOptionType.String,
                      required: true
        }]
    },
    execute(interaction){
        if (!interaction.isCommand()) return
        if (interaction.commandName == "consiglio"){
    
            const msg = interaction.options.getString("messaggio")
    
          const embed = new EmbedBuilder()
              .setColor('#ffef00')
              .setTitle("Consiglio")
              .setDescription(interaction.user.tag + " si sente magicamente utile e vuole darci una mano!")
              .addFields(
              { name: 'Modifica consigliata', value: `${msg}` },
              { name: 'Come funziona?', value: 'I player potranno dire la loro, ma la scelta finale rimane allo staff. Ovviamente la decisione sarà basata sull\'opinione pubblica'}
            )
      
              .setFooter({
                text: `Grazie del Consiglio!`
            })
      
            interaction.reply({ embeds: [embed], fetchReply: true })
            .then(interaction => {
              interaction.react("✅")
              interaction.react("❌")
            })
      
        let button1 = new Discord.ButtonBuilder()
            .setLabel("Accetta consiglio")
            .setCustomId("idBottone1")
            .setStyle(Discord.ButtonStyle.Success)
      
        let button2 = new Discord.ButtonBuilder()
            .setLabel("Rifiuta consiglio")
            .setCustomId("idBottone2")
            .setStyle(Discord.ButtonStyle.Danger)
      
            let row1 = new Discord.ActionRowBuilder() //Massimo 5 bottoni per riga
            .addComponents(button1)
            .addComponents(button2)
      
            interaction.channel.send({ components: [row1] }) //Si possono inserire massimo 5 righe (Es: components: [row1, row2, row3])
        }
        if(!interaction.isButton()) return



        if (interaction.customId == "idBottone1") {
            if (!interaction.member.roles.cache.has("796739126384656384")) {
                return interaction.reply({ content: config.emoji[0].error + " | Non puoi usare questo comando" })
            }
        
      
          const embed2 = new EmbedBuilder()
          .setColor('#ffef00')
          .setTitle("Consiglio ACCETTATO")
          .setDescription(interaction.user.tag + " ha dato un ottimo consiglio!")
          .addFields(
          { name: "Cos'è successo?", value: "Abbiamo deciso di accettare il tuo suggerimento. Grazie mille!" },
          { name: 'Come funziona?', value: 'I player potranno dire la loro, ma la scelta finale rimane allo staff. Ovviamente la decisione sarà basata sull\'opinione pubblica'}
        )
          .setFooter({
            text: `Grazie del Consiglio!`
        })
        interaction.reply({ embeds: [embed2]})
      }
            
      if (interaction.customId == "idBottone2") {
        if (!interaction.member.roles.cache.has("796739126384656384")) {
            return interaction.reply({ content: config.emoji[0].error + " | Non puoi usare questo comando" })
        }
    
      
        const embed3 = new EmbedBuilder()
        .setColor('#ffef00')
        .setTitle("Consiglio RIFIUTATO")
        .setDescription(interaction.user.tag + ", il tuo consiglio è stato rifiutato!")
        .addFields(
        { name: "Cos'è successo?", value: "Abbiamo deciso di rifiutare il tuo suggerimento." },
        { name: 'Come funziona?', value: 'I player potranno dire la loro, ma la scelta finale rimane allo staff. Ovviamente la decisione sarà basata sull\'opinione pubblica'}
      )
        .setFooter({
          text: `Grazie del Consiglio!`
      })
      interaction.reply({ embeds: [embed3]})
      }
    }
}
