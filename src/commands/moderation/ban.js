const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
  deleted: false,
  name: 'ban',
  description: 'Bans a member!!',
  // devOnly: Boolean,
  // testOnly: Boolean,
  options: [
    {
      name: 'target-user',
      description: 'The user to ban.',
      required: true,
      type: ApplicationCommandOptionType.Mentionable,
    },
    {
      name: 'reason',
      description: 'The reason for banning.',
      type: ApplicationCommandOptionType.String,
    },
  ],
  permissionsRequired: [PermissionFlagsBits.Administrator],
  botPermissions: [PermissionFlagsBits.Administrator],



  callback: async (client, interaction) => {
    try {
      // Get the user to be banned
      const userToBan = interaction.options.getUser('target-user');
      // Get the reason for banning
      const reason = interaction.options.getString('reason') || 'No reason provided.';

      if (!interaction.guild.me.permissions.has(PermissionFlagsBits.BanMembers)) {
        return interaction.reply({ content: 'I do not have permission to ban members.', ephemeral: true });
    }

    await interaction.guild.members.ban(userToBan, { reason: reason });
    interaction.reply({ content: `Banned the stinky ${userToBan.username} >:(, because: [${reason}](https://tenor.com/view/ban-button-keyboard-press-the-ban-button-gif-16387934 )` });
  } catch (error) {
    console.error(error);
    interaction.reply({ content: 'An error occurred while trying to ban the user.', ephemeral: true });
  }
},
};