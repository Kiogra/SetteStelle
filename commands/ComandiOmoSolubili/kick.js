const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js')
module.exports = {
    name: "kick",
    data: {
        name: "kick",
        description: "Mona kickato, server mezzo salvato!",
        options: [
            {
                name: "user",
                description: "L'utente da bannare",
                type: ApplicationCommandOptionType.User,
                required: true
            },
            {
                name: "reason",
                description: "Motivazione",
                type: ApplicationCommandOptionType.String,
                required: false
            }
        ]

    },
    execute(interaction) {
        if (!interaction.member.permissions.has("KICK_MEMBERS")) {
            return interaction.reply({ content: "Non hai il permesso", ephemeral: true })
        }

        var utente = interaction.options.getUser("user")
        var reason = interaction.options.getString("reason") || "Nessun motivo"

        var member = interaction.guild.members.cache.get(utente.id)
        if (!member?.kickable) {
            return interaction.reply({ content: "Non posso kickare questo utente", ephemeral: true })
        }

        member.kick()

        var embed = new EmbedBuilder()
            .setColor('#ffef00')
            .setTitle("Nuovo kick")
            .setThumbnail(utente.displayAvatarURL())
            .addFields(
                { name: '**Utente**', value: `${utente}`}
            )           
            .addFields(
                { name: '**Ragione**?', value: reason}
            )


        interaction.reply({ embeds: [embed] })
    }
}
