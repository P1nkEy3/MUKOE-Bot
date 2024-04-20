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

let status = [
  {
    name: "Mukoe Mukoing 🦍",
    type: ActivityType.Watching,
    url: "https://youtu.be/RjT31CCJMYE"
  },
  {
    name: "Stinky Stonker 😋",
    type: ActivityType.Watching,
    url: "https://youtu.be/RjT31CCJMYE"
  },
  {
    name: "oops i did a poopsie 🤭",
    type: ActivityType.Watching,
    url: "https://youtu.be/RjT31CCJMYE"
  },
];

eventHandlers(client);

client.login(process.env.BOT_TOKEN);