const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js')
module.exports = {
    name: "ticket",
    data: {
        name: "ticket",
        description: "Ticket!",
    },
    execute(interaction){
        if (!interaction.member.roles.cache.has("796739126384656384")) {
            return interaction.reply({ content: config.emoji[0].error + " | Non puoi usare questo comando" })
        }
        let embed = new Discord.EmbedBuilder()
        .setTitle("Ticket")
        .setDescription("Se hai bisogno di supporto o vuoi semplicemente esporci una domanda, apri un ticket cliccando il bottono sottostante.\r\r📌 Se il tuo problema non è stato risolto entro 24 ore il nostro team specializzato sarà a tua dispsizione!!")
        .setThumbnail("https://cdn.discordapp.com/attachments/692358754628403240/1031542737717178368/Logo_Bot.png")
        .setColor("#00ff12")

        let button1 = new Discord.ButtonBuilder()
            .setLabel("Supporto")
            .setCustomId("supporto")
            .setStyle(Discord.ButtonStyle.Success)

        let button2 = new Discord.ButtonBuilder()
            .setLabel("Partnership")
            .setCustomId("partnership")
            .setStyle(Discord.ButtonStyle.Success)

        let button3 = new Discord.ButtonBuilder()
            .setLabel("Candidature Media")
            .setCustomId("candidatureMedia")
            .setStyle(Discord.ButtonStyle.Success)

        let button4 = new Discord.ButtonBuilder()
            .setLabel("Candidatura Staff")
            .setCustomId("candidatureStaff")
            .setStyle(Discord.ButtonStyle.Success)

        let row = new Discord.ActionRowBuilder()
            .addComponents(button1)
            .addComponents(button2)
            .addComponents(button3)
            .addComponents(button4)

            interaction.channel.send({ embeds: [embed], components: [row] })
        
            if (interaction.customId == "supporto") {
                if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
                    interaction.user.send("Hai gia un ticket aperto!").catch(() => { })
                    return
                }
        
                interaction.guild.channels.create({
                    name: `Ticket Supporto ${interaction.user.tag}`,
                    type: ChannelType.GuildText,
                    topic: `User ID: ${interaction.user.id}`,
                    parent: "1032296783516291173", //Settare la categoria,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [PermissionsBitField.Flags.ViewChannel],
                                },
                        {
                            id: interaction.user.id,
                            allow: [PermissionsBitField.Flags.ViewChannel],
                
                        },
                        { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
                            id: "796739126384656384", //staff
                            allow: [PermissionsBitField.Flags.ViewChannel],
                        },
                    ]
        
                })
                .then(canale => {
        
                    let embed = new Discord.EmbedBuilder()
                    .setTitle("Supporto")
                    .setDescription(`Salve ${interaction.member.toString()}! Grazie per aver aperto un ticket nella sezione: **Supporto Generale**.\rNel frattempo che attendi uno <@&796739126384656384> o un <@&919002015194021921>  rispondi alle seguenti domande:\r**Di cosa hai bisogno?**\r**Sia preciso e dettagliato, non ti leggiamo nella mente!**`)
                    .setColor("#ffed00")
        
                    let chiusura = new Discord.ButtonBuilder()
                    .setLabel("Chiudi Ticket")
                    .setCustomId("chiusura")
                    .setStyle(Discord.ButtonStyle.Danger)
            
                    let row = new Discord.ActionRowBuilder()
                    .addComponents(chiusura)
        
                    canale.send({ embeds: [embed], components: [row]  })
                })
            }
            if (interaction.customId == "partnership") {
                if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
                    interaction.user.send("Hai gia un ticket aperto!").catch(() => { })
                    return
                }
        
                interaction.guild.channels.create({
                    name: `Ticket PartnerShip ${interaction.user.tag}`,
                    type: ChannelType.GuildText,
                    topic: `User ID: ${interaction.user.id}`,
                    parent: "1032296783516291173", //Settare la categoria,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [PermissionsBitField.Flags.ViewChannel],
                        },
                        {
                            id: interaction.user.id,
                            allow: [PermissionsBitField.Flags.ViewChannel],
                
                        },
                        { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
                            id: "796739126384656384", //staff
                            allow: [PermissionsBitField.Flags.ViewChannel],
                        },
                    
                    ]
                }).then(canale => {
        
                    let embed = new Discord.EmbedBuilder()
                    .setTitle("Partnership")
                    .setDescription(`Salve ${interaction.member.toString()}! Grazie per aver aperto un ticket per la sezione: **Partnership**\rNel frattempo che attendi uno <@&796739126384656384> o un <@&919002015194021921>, manda la tua descrizione qui, ed entra in tutti i server della nostra catena se non l'hai ancora fatto!`)
                    .setColor("#ffed00")
        
                    let chiusura = new Discord.ButtonBuilder()
                    .setLabel("Chiudi Ticket")
                    .setCustomId("chiusura")
                    .setStyle(Discord.ButtonStyle.Danger)
            
                    let row = new Discord.ActionRowBuilder()
                    .addComponents(chiusura)
        
                    canale.send({ embeds: [embed], components: [row]  })
                })
        
            }
            if (interaction.customId == "candidatureMedia") {
                if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
                    interaction.user.send("Hai gia un ticket aperto!").catch(() => { })
                    return
                }
                
                interaction.guild.channels.create({
                    name: `Ticket Candidature Media ${interaction.user.tag}`,
                    type: ChannelType.GuildText,
                    topic: `User ID: ${interaction.user.id}`,
                    parent: "1032296783516291173", //Settare la categoria,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [PermissionsBitField.Flags.ViewChannel],
                                },
                        {
                            id: interaction.user.id,
                            allow: [PermissionsBitField.Flags.ViewChannel],
                
                        },
                        { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
                            id: "796739126384656384", //staff
                            allow: [PermissionsBitField.Flags.ViewChannel],
                        },
                    ]
        
                }).then(canale => {
        
                    let embed = new Discord.EmbedBuilder()
                    .setTitle("Candidature Media")
                    .setDescription(`Salve ${interaction.member.toString()}! Grazie per aver aperto un ticket per la sezione: **Candidature Media**\rNel frattempo che attendi uno <@&796739126384656384> o un <@&919002015194021921> rispondi alle seguenti domande:\r**Nome:**\r**Età:**\r**Iscritti//followers:**\r**Numero di live o video a settimana:**\r**Follower o visualizzazioni medie per video o live:**`)
                    .setColor("#ffed00")
        
                    let chiusura = new Discord.ButtonBuilder()
                    .setLabel("Chiudi Ticket")
                    .setCustomId("chiusura")
                    .setStyle(Discord.ButtonStyle.Danger)
            
                    let row = new Discord.ActionRowBuilder()
                    .addComponents(chiusura)
        
                    canale.send({ embeds: [embed], components: [row]  })
                })
        
            }
            if (interaction.customId == "candidatureStaff") {
                if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
                    interaction.user.send("Hai gia un ticket aperto!").catch(() => { })
                    return
                }
               
                interaction.guild.channels.create({
                    name: `Ticket Candidature Staff ${interaction.user.tag}`,
                    type: ChannelType.GuildText,
                    topic: `User ID: ${interaction.user.id}`,
                    parent: "1032296783516291173", //Settare la categoria,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [PermissionsBitField.Flags.ViewChannel],
                                },
                        {
                            id: interaction.user.id,
                            allow: [PermissionsBitField.Flags.ViewChannel],
                
                        },
                        { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
                            id: "796739126384656384", //staff
                            allow: [PermissionsBitField.Flags.ViewChannel],
                        },
                    ]
        
                }).then(canale => {
        
                    let embed = new Discord.EmbedBuilder()
                    .setTitle("Candidature Staff")
                    .setDescription(`Salve ${interaction.member.toString()}! Grazie per aver aperto un ticket per la sezione: **Candidature Staff**\rNel frattempo che attendi uno <@&796739126384656384> o un <@&919002015194021921> rispondi alle seguenti domande:\r**Nome:**\r**Ign (Nome in game):**\r**Età:**\r**@ di Telegram:**\r**Perchè vuoi entrare all'interno dello staff?**`)
                    .setColor("#ffed00")
        
                    let chiusura = new Discord.ButtonBuilder()
                    .setLabel("Chiudi Ticket")
                    .setCustomId("chiusura")
                    .setStyle(Discord.ButtonStyle.Danger)
            
                    let row = new Discord.ActionRowBuilder()
                    .addComponents(chiusura)
        
                    canale.send({ embeds: [embed], components: [row] })
                })
        
            }
            client.on("interactionCreate", async interaction => {
                if (interaction.customId == "chiusura") {
                    interaction.channel.delete();
                }
            })
            
    }
}