const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js')
module.exports = {
    name: "embed",
    data: {
        name: "embed",
        description: "Manda un embed!",
        options: [{
            name: "titolo",
            description: "titolo",
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "descrizione",
            description: "descrizione",
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "fieldname",
            description: "nome del field",
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "fieldlore",
            description: "lore del field",
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "fieldname2",
            description: "nome del field 2",
            type: ApplicationCommandOptionType.String,
            required: false
        },
        {
            name: "fieldname3",
            description: "nome del field 3",
            type: ApplicationCommandOptionType.String,
            required: false
        },
        {
            name: "fieldlore2",
            description: "lore del field 2",
            type: ApplicationCommandOptionType.String,
            required: false
        },
        {
            name: "fieldlore3",
            description: "lore del field 3",
            type: ApplicationCommandOptionType.String,
            required: false
        }]
    },
    execute(interaction) {
    const titolo = interaction.options.getString("titolo")
    const descrizione = interaction.options.getString("descrizione")
    const fieldname = interaction.options.getString("fieldname")
    const fieldname2 = interaction.options.getString("fieldname2")
    const fieldname3 = interaction.options.getString("fieldname3")
    const fieldlore = interaction.options.getString("fieldlore")
    const fieldlore2 = interaction.options.getString("fieldlore2")
    const fieldlore3 = interaction.options.getString("fieldlore3")
        
    const embed = new EmbedBuilder()
    .setTitle(titolo)
    .setDescription(descrizione)
    .setAuthor({name: "Staff di SetteStelle"})
    .setImage("https://probot.media/2QuZVdAZwv.png")
    .setColor("#ffef00")
    .addFields({
        name: fieldname,
        value: fieldlore
    })
    if (fieldname2 !== 0) {
        embed.addFields({   
        name: fieldname2,
        value: fieldlore2
    })}
    if (fieldname3 !== 0) {
        embed.addFields({   
        name: fieldname3,
        value: fieldlore3
})}
embed.setFooter({
    text: `Grazie dell'ascolto!`
})
}}