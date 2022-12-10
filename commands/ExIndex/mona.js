module.exports = {
    name: "mona",
    data: {
        name: "mona",
        description: "MONA CHI?!",
    },
    execute(interaction) {
        if (interaction.commandName == "mona") {
            var embed = new Discord.EmbedBuilder()
                .setTitle("MONA TO MARE TO PARE TA SORELL")

            interaction.reply({ embeds: [embed], ephemeral: true })
        }
    }
}
