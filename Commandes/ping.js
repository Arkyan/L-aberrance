const Discord = require('discord.js');

module.exports = {

    name: 'ping',       
    description: 'Affiche la latence !',
    permission : 'Aucune',
    dm : false,
    options : [],

    async run (bot, message) {

        await message.reply(`Ping: \`${bot.ws.ping}ms\``)
    }

}
