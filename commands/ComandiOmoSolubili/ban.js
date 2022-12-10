const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js')
module.exports = {
    name: "ban",
    data: {
        name: "ban",
        description: "Mona bannato, server mezzo salvato!",
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
        if (!interaction.member.permissions.has("BAN_MEMBERS")) {
            return interaction.reply({ content: "Non hai il permesso", ephemeral: true })
        }


        var utente = interaction.options.getUser("user")
        var reason = interaction.options.getString("reason") || "Nessun motivo"

        var member = interaction.guild.members.cache.get(utente.id)
        if (!member?.bannable) {
            return interaction.reply({ content: "Non posso bannare questo utente", ephemeral: true })
        }

        member.ban()

        var embed = new EmbedBuilder()
            .setColor('#ffef00')
            .setTitle("Nuovo Ban")
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
