const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Fetch a user\'s avatar')
    .addUserOption((option) =>
        option.setName('user')
        .setDescription('User to fetch.')
        .setRequired(true)
    ),

    async execute(interaction) {
        const { channel, client, options, member } = interaction
        let user = interaction.options.getUser('user') || interaction.member
        let userAvatar = user.displayAvatarURL({ size: 512 })

        const embed = new EmbedBuilder()
        .setColor('Red')
        .setAuthor(`${user.tag}'s avatar`)
        .setImage(userAvatar)
        .setFooter(`Requested by ${interaction.member}`)
        .setTimestamp()

        const btn = new ButtonBuilder()
        .setLabel('Avatar Link')
        .setStyle(ButtonStyle.Link)
        .setURL(user.avatarURL({ size: 2048 }))

        const row = new ActionRowBuilder().addComponents(btn)

        await interaction.reply({
            embeds: [embed],
            components: [row],
        })
    }

}