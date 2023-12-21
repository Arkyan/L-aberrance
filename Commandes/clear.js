const Discord = require('discord.js');

module.exports = {

    name: 'clear',
    description: 'Supprime un nombre de messages !',
    permission: Discord.PermissionFlagsBits.ManageMessages,
    dm: false,
    options: [
        {
            type: 'number',
            name: 'nombre',
            description: 'Nombre de messages à supprimer',
            required: true
        },
        {
            type: 'channel',
            name: 'salon',
            description: 'Salon dans lequel supprimer les messages',
            required: false
        },


    ],

    async run(bot, message, args) {
        let channel = args.getChannel('salon')
        if (!channel) channel = message.channel;
        if (channel.id !== message.channel.id && !message.guild.channels.cache.get(channel.id)) return message.reply('Ce salon n\'existe pas !')

        let number = args.getNumber('nombre')
        if (parseInt(number) < 1 || parseInt(number) > 100) return message.reply('Le nombre doit être compris entre 1 et 100 !')

        await message.deferReply()

        try {
            let messages = await channel.bulkDelete(parseInt(number))

            await message.followUp({content: `J'ai bien supprimé \`${messages.size}\` messages !`, ephemeral: true })

        } catch (err) {
            let messages = [...(await channel.messages.fetch()).filter(msg => !msg.interaction && (Date.now() - msg.createdAt) <= 1209600000).values()]
            if (messages.length <= 0) return message.followUp('Aucun message à supprimer car ils datent de + de 14 jours !')
            await channel.bulkDelete(messages)

            await message.followUp({ content: `J'ai pu supprimé uniquement \`${messages.length}\` messages car les autres dataient de + de 14 jours !`, ephemeral: true })
        }


    }
}