const { model, Schema } = require('mongoose')

module.exports = model("Features", new Schema({
    GuildID: String,
    LevelSystem: {
        Enabled: {
            type: Boolean,
            default: false,
        },
        Background: {
            type: String,
            default: "https://cdn.discordapp.com/attachments/1042433292034654291/1053936118061604924/hello.png"
        }
    }
}))