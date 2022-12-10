module.exports = {
    name: "roll",
    data: {
        name: "roll",
        description: "Info sul Roll!",
    },
    execute(interaction) {
        if (interaction.commandName == "roll") {
            var embed = new Discord.EmbedBuilder()
                .setTitle("Purtroppo il roll non funziona con gli slash. Usa !roll per farlo funzionare!.")
                .addFields({
                    name: "Ci sono delle shortcut che puoi usare per i tiri. Per esempio:",
                    value: "Difficoltà: > `5d2>5`\nAumenta: + `5d2+10`\nPrendi i minori di: ! `10d5!2` (Il filtro deve essere più piccolo delle facce del dado)\n"
                })
                .setColor('#ffef00')
                .setAuthor({name: "Staff di SetteStelle"})
            interaction.reply({ embeds: [embed], ephemeral: true })
        }
    }
}