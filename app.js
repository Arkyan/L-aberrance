const { Collection } = require('discord.js');
const Discord = require('discord.js');
const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({intents});
const loadCommands = require('./Loader/loadCommands'); 
const loadEvents = require('./Loader/loadEvents');  
const config = require('./config.js');

bot.commands = new Collection();

bot.commands = new Discord.Collection();
bot.login(config.token);
loadCommands(bot);
loadEvents(bot);



