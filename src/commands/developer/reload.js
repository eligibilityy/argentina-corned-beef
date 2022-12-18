const { Client, SlashCommandBuilder, PermissionFlagsBits, ChatInputCommandInteraction } = require('discord.js')
const { loadCommands } = require('../../Handlers/CommandHandler')
const { loadEvents } = require('../../Handlers/EventHandler')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Reload events/commands.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand(
        command => 
        command.setName("events")
        .setDescription("Reload events."))
    .addSubcommand(
        command => 
        command.setName("commands")
        .setDescription("Reload commands.")),
    developer: true,
    /**
     * @param { ChatInputCommandInteraction } interaction
     */
    async execute(interaction, client) {

        const sub = interaction.options.getSubcommand();

        switch (sub) {
            case "commands": {
                loadCommands(client);
                interaction.reply({ content: 'Reloaded Commands.'})
            }
            break;
        
            case "events": {
                loadEvents(client);
                interaction.reply({ content: 'Reloaded Events.'})
            }
            break;
        }

    },
}