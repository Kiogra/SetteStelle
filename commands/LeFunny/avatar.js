const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js')
module.exports = {
    name: "avatar",
    data: {
        name: "avatar",
        description: "L'avatar dell'utente da te richiesto!",
        options: [
            {
                name: "user",
                description: "L'utente da cui prendere l'avatar",
                type: ApplicationCommandOptionType.User,
                required: true
            }
        ]

    },
    execute(interaction) {
        const Target = interaction.options.getUser('user');

        const Response = new EmbedBuilder()
            .setColor('#ffef00')
            .setAuthor({name: `Avatar di ${Target.tag}`})
            .setImage(Target.displayAvatarURL({dynamic: true}))
            .setFooter({ text: "Vedi di usarlo bene ;D"})

        
        interaction.reply({embeds: [Response]})
    }
}
