module.exports = {
    name: "staff",
    data: {
        name: "staff",
        description: "Comandi Staff?!",
    },
    execute(interaction) {
        if (interaction.commandName == "staff") {
            if (!interaction.member.roles.cache.has("796739126384656384")) {
                return interaction.reply({ content: config.emoji[0].error + " | Non puoi usare questo comando" })
            }
        
            var embed = new Discord.EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Informazioni sui comandi staff Sette Stelle')
            .setURL('https://www.twitch.tv/kiograh')
            .setAuthor({ name: 'Lo Staff di ZevenZtarZ', iconURL: 'https://i.imgur.com/mPLrQQJ.png', url: 'https://www.twitch.tv/kiograh' })
            .setDescription("Informazioni su Sette Stelle")
            .setThumbnail('https://i.imgur.com/mPLrQQJ.png')
            .addFields(
                { name: 'Agenda dei comandi:', value: '`/ban `Banna chi vuoi \n `/clear` Pulisci la chat.. \n `/kick` Kicka chi vuoi \n `/say` Annuncio del bot!', inline: false },
            )
            .setImage('https://i.imgur.com/mPLrQQJ.png')
            .setTimestamp()
            .setFooter({ text: 'Grazie di esserti interessato!', iconURL: 'https://i.imgur.com/mPLrQQJ.png' });
            interaction.reply({ embeds: [embed], ephemeral: false })
        }
    }
}