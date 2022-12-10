module.exports = {
    name: "insulti",
    data: {
        name: "insulti",
        description: "Insulta chi vuoi!",
    },
    execute(interaction) {
        if (interaction.commandName == "insulti") {
            var embed = new Discord.EmbedBuilder()
                .setTitle("Insulta chi vuoi tu!")
            .addFields(
                { name: '**IO QUANDO TU SEI:**', value: `Coglione\nFiglio di Mignotta\nStronzo\nPezzo di merda\nVaffanculo\nSciacallo\nSei un cesso\nDeficente\nTesta di cazzo\nPuttana`}
            )
            .addFields(
                {name: "**E**", value: "\nMignotta\nTroi\/nZoccola\nBaldracca\nBastardO\nLeccaculo\nMagnaccia\nPappone\nMaiale\nPorco\nStupido\nCretino\nIodita\nFrocio\nCulattone"}
            )
            .addFields(
                {name: "E ANCORA", value: "\nRicchione\nGay\nSei una sega\nIena\nCafone\nImbecille\nEssere un conta-palle\nSei una palla\nVai a farti fottore\nSei un uomo senza palle\nSei una merda\nPezzo di merda\nCazzone"}
            )
            .addFields(
                {name: "**CONTINUO DICENDO**", value: "\nMinchione\nRimbambito\nRincoglionito\nFannullone\nBuono a nulla\nSei un ingrato\nSei un pezzente\nSei una feccia umana"}
                )
            .addFields(
                {name: "SE VOGLIAMO SGRAVARE", value: "\nTua madre è Puttana\nMeschino\nPirla\nRuffiano\nMerdoso\nSchifoso\nVai al diavolo\nVai all inferno\nSei un finocchio\nCrucco\nFarabutto\nQuaquaraquà\nTamarro\nSei un cerebroleso"}
            )           
            .addFields(
                {name: "**ZII OGGI SI ESAGERA**", value: "\nBifolco\nEbete \nLurido\nObbrobrio\nBimbominkia\nCafone\nNegro\nPolentone\nTamarro\nTerrone\nVucumprà\nLazzarone\nLavativo\nSciamannato\nBuzzurro\nGaglioffo\nBucaniere\nManigoldo"}
            )
            .addFields(
                {name: "**OGGI SI SBOCCIA**", value: "\nPusillanime\nLestoFante\nMascalzone\nCitrullo\nGrullo\nVillano\nCornuto\nMaiale\nPorco\nTua madre\nTua sorella Puttana\nDalla corta Minkia\nDisabile\nEsperimento Sociale\nScherzo finito Male"}
            )
            .addFields(
                {name: "CONCLUDO CON", value: "\nEbreo\nScherzo della natura.\nComunista\nSegaiolo\nLeccaPiselli\nMangia Kinder-Max\nNun tieni nu beddu pesc"}
            )
            interaction.reply({ embeds: [embed], ephemeral: false })
        }
    }
}