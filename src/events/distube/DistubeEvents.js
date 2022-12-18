const { EmbedBuilder } = require('@discordjs/builders')
const client = require('../../bot')

const Response = new EmbedBuilder()
.setColor(client.mainColor)
.setTitle(`Music`)
.setTimestamp(Date.now())

const status = queue =>
  `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.names.join(', ') || 'Off'}\` | Loop: \`${
    queue.repeatMode ? (queue.repeatMode === 2 ? 'Queue' : 'This Song') : 'Off'
  }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``
client.distube
  .on('playSong', (queue, song) =>
    queue.textChannel.send({embeds: [Response.setDescription(`Playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`).setFooter(`Requested by: ${
        song.user
      }`)]}
    )
  )
  .on('addSong', (queue, song) =>
    queue.textChannel.send({embeds: [Response.setDescription(`Added ${song.name} - \`${song.formattedDuration}\``).setFooter(`Requested by ${song.user}`)]})
  )
  .on('addList', (queue, playlist) =>
    queue.textChannel.send({embeds: [Response.setDescription(`Added \`${playlist.name}\` to queue. (${playlist.songs.length} songs) \n${status(queue)}`)]}
    )
  )
  .on('error', (channel, e) => {
    if (channel) channel.send(`Something happened!: \`${e.toString().slice(0, 1974)}\``)
    else console.error(e)
  })
  .on('empty', channel => channel.send({embeds: [Response.setDescription('Voice channel is empty! Leaving the channel...')]}))
  .on('searchNoResult', (message, query) =>
    message.channel.send({embeds: [Response.setDescription(`No result found for \`${query}\`!`)]})
  )