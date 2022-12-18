const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping'),
    execute(interaction, client) {
        interaction.reply({
            content: `\`${client.ws.ping} ms.\``
        });
    },
};