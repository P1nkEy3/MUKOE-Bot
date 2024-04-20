require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');
const eventHandlers = require('./handlers/eventHandlers');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

eventHandlers(client);

client.login(process.env.BOT_TOKEN);