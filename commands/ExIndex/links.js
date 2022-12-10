const {ApplicationCommandOptionType, PermissionFlagsBits} = require("discord.js")
module.exports = {
    name: "links",
    data: {
        name: "links",
        description: "Links del founder?",
    },
    execute(interaction) {
        if (interaction.commandName == "links") {
            var embed = new Discord.EmbedBuilder()
            .setColor("#ffef00")
            
            .setDescription("Qui troverai tutti i Link di Kiograh!")
            .setTitle("Link di Kiograh")
            .addFields({ name: 'Grazie di aver chiesto i link dei miei canali, ecco a te il canale twitch e youtube', value: "https://www.twitch.tv/kiograh \n https://www.youtube.com/channel/UCMmyrlZnP6kVzi9lpLXhgsw", inline: true })
            .setFooter({
                text: `Grazie di aver Letto!`
            })
            .setThumbnail('https://i.imgur.com/mPLrQQJ.png')
            interaction.reply({ embeds: [embed], ephemeral: false })
        }}
    }