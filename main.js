console.clear()
const Discord = require('discord.js'),
    token = 'token',
    client = new Discord.Client()
client.on('ready', async message => {
    console.log(`${client.user.tag} connected!`)
})
client.on('messageDelete', async message => {
    if (message.author.id != client.user.id) return;
    if (message.content == 'Get Anti-Sniped.') return;
    let msg = await message.channel.send('Get Anti-Sniped.')
    let {
        guild
    } = message;
    if (guild) {
        var snipelocation = guild.name
        var channel = msg.channel.name
        console.log('╭─────────────༺♛༻─────────────╮\nAntisnipe éffectué ! \nServeur :' + snipelocation + '\nChannel :', channel, `\nMessage : ${message.content}\n╰─────────────༺♛༻─────────────╯`)
    } else if (msg.channel.type == 'group') {
        var snipelocation = msg.channel.name
        console.log('╭─────────────༺♛༻─────────────╮\nAntisnipe éffectué ! \nGroupe : ' + snipelocation, `\nMessage : ${message.content}\n╰─────────────༺♛༻─────────────╯`)
    } else if (msg.channel.type == 'dm') {
        var snipelocation = msg.channel.recipient.username
        var usertag = msg.channel.recipient.discriminator
        console.log('╭─────────────༺♛༻─────────────╮\nAntisnipe éffectué ! \nDM avec : ' + `${snipelocation}#${usertag}\nMessage : ${message.content}\n╰─────────────༺♛༻─────────────╯`)
    }

    return msg.delete();
})
client.login(token)