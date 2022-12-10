const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ApplicationCommandOptionType, PermissionsBitField, ChannelType } = require("discord.js");
const { Collection } = require("discord.js")
global.config = require("./config.json");    
global.Discord = require("discord.js")
global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
})
const colore = require('chalk');
const moment = require("moment")
const colors = require("./colors.json")


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
})


client.once("ready", () => {
    console.log(colore.green(client.user.tag) + colore.blue(" SIUMMA"))
    let guilds = client.guilds.cache.map(guild => `${guild.name} | ${guild.id}\n`).join("");
    console.log(guilds.toString())

})

client.on("messageCreate", message => {
    if (message.channel.type == "DM") return
  
    if (message.member.roles.cache.has("980198336659333170") || message.member.roles.cache.has("796739126384656384")) return
  
    let parolacce = ["discord.gg", "negro", "dio", "madonna", "froci", "immigrat", "DIO", "FROCIO", "MADONNA", "FROCI", "IMMIGRAT"]
    let trovata = false;
    let testo = message.content;
  
    parolacce.forEach(parola => {
        if (message.content.toLowerCase().includes(parola.toLowerCase())) {
            trovata = true;
            testo = testo.replace(eval(`/${parola}/g`), "###");
        }
    })
  
    if (trovata) {
        message.delete();
        let embed = new Discord.EmbedBuilder()
            .setTitle("Hai detto una parolaccia")
            .setColor('#ffef00')
            .setDescription("Hai scritto un messaggio con parole bloccate\nIl tuo messaggio: " + testo)
  
        message.channel.send({ embeds: [embed] })
    }
})



client.login(config.bot[0].token)


//Module export
const fs = require("fs-extra")
client.commands = new Discord.Collection()

const commandsFolder = fs.readdirSync("./commands");
for (const folder of commandsFolder) {
    const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandsFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

client.on("ready", () => {
    client.guilds.cache.forEach(guild => {
        client.commands.forEach(command => {
            guild.commands.create(command.data)
        })
    })
})

client.on("interactionCreate", interaction => {
  if(!interaction.isCommand()) return;
  
    const command = client.commands.get(interaction.commandName)
    if (!command) return

    command.execute(interaction)
})


//I CIAO
client.on('guildMemberAdd', member => {
    const channel16 = client.channels.cache.get("1045378378359910402")
        if (!channel16) return;
        let embed = new EmbedBuilder()
        .setColor('#ffef00')
        .setThumbnail(`${member.user.displayAvatarURL()}`)
        .addFields({
            name: 'Benvenuto!',
            value: `Ciao ${member} Se hai meno di Tredic'anni o credi ancora in Babbo Natale, non è il tuo posto!`
        })
        .setTimestamp()

  channel16.send({embeds: [embed]})
});


client.on('guildMemberRemove', member => {
    const channel5 = client.channels.cache.get("1045378378359910402")//CANALE ID ADDIO
    if (!channel5) return;
      let embed = new EmbedBuilder()
      .setColor('#ffef00')
      .setThumbnail(`${member.user.displayAvatarURL()}`)
      .addFields({
        name: 'Ciao Ciao FALLITO >:(!',
        value: `${member} è un fallito ed è uscito D:`
    })
      .setTimestamp()
    
  channel5.send({embeds: [embed]})
}); 

// spawn_python.js
var util = require("util");

var spawn = require("child_process").spawn;
var process = spawn('python',["main.py"]);

util.log('DADI OPERATIVI')

process.stdout.on('data',function(chunk){

    var textChunk = chunk.toString('utf8');// buffer to string

util.log(textChunk);

})


