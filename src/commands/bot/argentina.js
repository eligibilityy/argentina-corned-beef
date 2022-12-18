const { EmbedBuilder } = require('@discordjs/builders')
const { Client, SlashCommandBuilder, ChatInputCommandInteraction } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("argentina")
    .setDescription("Introduce the deliciousness of Argentina Corned Beef to your friends!"),
    /**
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const link = `https://centurypacific.com.ph/brands/argentina/`
        const Response = new EmbedBuilder()
        .setColor(client.mainColor)
        .setTitle("Sarap at Sustansya, Pinagsama Na!")
        .setDescription(`[Argentina, the number one brand in the canned meat market](${link}) provides Filipino families with delicious and healthy products to enjoy. \nIt has been in the market since 1995 and continues to delight the entire family with products that fit their lifestyles – moms enjoy cooking Argentina Corned Beef, dads prefer Argentina Sisig for pulutan, kuya and ate love to share Argentina Beef Loaf with their barkada and the young ones are delighted with Argentina Meat Loaf. \nArgentina always satisfies the needs of the family.`)
        .setFooter({text: `Requested by ${client.user.tag}`, iconURL: client.user.displayAvatarURL()})

        await interaction.reply({embeds: [Response]})

    }
}