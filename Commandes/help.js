const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Affiche la liste des commandes !',
    permission: 'Aucune',
    dm: false,
    options: [],
    async run(bot, message) {

        const embed = {
            color: 0x9933ff, // Couleur violette
            title: 'Liste des commandes',
            description: 'Voici la liste des commandes disponibles !',
            fields: [
                {
                    name: 'Commandes',
                    value: '`/help` : Affiche la liste des commandes\n`/ping` : Affiche la latence\n`/reseaux` : Affiche les réseaux sociaux\n`/clear` : Supprime un nombre de messages',
                }]
        }

        await message.reply({ embeds: [embed] })

    }
}