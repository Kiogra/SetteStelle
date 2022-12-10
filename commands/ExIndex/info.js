module.exports = {
    name: "info",
    data: {
        name: "info",
        description: "Informazioni sul bot per te!",
    },
    execute(interaction) {
        var embed = new Discord.EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Informazioni sul Bot Sette Stelle')
        .setURL('https://www.twitch.tv/kiograh')
        .setAuthor({ name: 'Lo Staff di ZevenZtarZ', iconURL: 'https://i.imgur.com/mPLrQQJ.png', url: 'https://www.twitch.tv/kiograh' })
        .setDescription("Informazioni su Sette Stelle")
        .setThumbnail('https://i.imgur.com/mPLrQQJ.png')
        .addFields(
            { name: "Cos'è Sette Stelle?", value: "\nSette Stelle è un Bot creato da Kiograh per i suoi server minecraft e discord. \n Contiene svariati comandi che possono servire nella vita di tutti i giorni!" },
            { name: '\u200B', value: '\u200B' },
            { name: 'Agenda dei comandi:', value: '`/info `Info sul Bot \n `/catsay` Un gatto, una frase.. \n `/links` links del Founder \n `/mona` MONA CHI?!\n `/8ball` Cosa dirà il destino?! \n `/insulti` 100 insulti in arrivo! \n `/roll` Tira i dadi!\n `/avatar` Avatar di chi vuoi! \n `/consiglio` Lasciaci un consiglio! ', inline: false },
            { name: 'E per lo staff?', value: "Ovviamente ci sono dei comandi staff, ma che nascondo con il comando /staff disponibile solo a chi ha il ruolo staff.", inline: false },
            { name: 'Lo posso mettere nel MIO server?', value: 'Il bot essendo settato per i miei server, è per me difficile metterlo pubblico e disponibile a tutti, mi dispiace', inline: false },
        )
        .addFields({ name: "Chi l'ha creato?", value: "L'ha creato Kiograh con l'aiuto di guide e amici che l'hanno aiutato nel percorso!", inline: false })
        .setImage('https://i.imgur.com/mPLrQQJ.png')
        .setTimestamp()
        .setFooter({ text: 'Grazie di esserti interessato!', iconURL: 'https://i.imgur.com/mPLrQQJ.png' });
        interaction.reply({ embeds: [embed], ephemeral: false })
    }
    
}